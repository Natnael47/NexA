import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const prisma = new PrismaClient();

const uploadsDir = path.join("uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export const addElevator = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    // Check if an elevator with the same title exists
    const existingElevator = await prisma.elevator.findUnique({
      where: { title },
    });

    if (existingElevator) {
      return res
        .status(400)
        .json({ success: false, message: "Elevator title must be unique." });
    }

    if (!req.files || req.files.length < 1 || req.files.length > 20) {
      return res.status(400).json({
        success: false,
        message: "You must upload between 1 and 20 images.",
      });
    }

    const images = [];

    // Convert each image to .webp and save to disk
    for (const file of req.files) {
      const filename = `${Date.now()}-${file.originalname.split(".")[0]}.webp`;
      const filepath = path.join("uploads", filename);

      await sharp(file.buffer).webp({ quality: 80 }).toFile(filepath);

      images.push(filename);
    }

    const newElevator = await prisma.elevator.create({
      data: {
        title,
        description,
        images,
        category,
        price: 0.0, // Default price
      },
    });

    res.json({
      success: true,
      message: "Elevator added successfully",
      data: newElevator,
    });
  } catch (error) {
    console.error("Error adding elevator:", error);
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(`uploads/${file.filename}`, (err) => {
          if (err) console.error("Error deleting file:", err);
        });
      });
    }
    res.status(500).json({ success: false, message: "Error adding elevator" });
  }
};

// Update an elevator by ID
export const updateElevatorById = async (req, res) => {
  try {
    const { id } = req.params;
    const formattedBody = Object.keys(req.body).reduce((acc, key) => {
      acc[key.trim()] = req.body[key]; // Trim keys to remove extra spaces
      return acc;
    }, {});

    const { title, description, category, price, removeImages } = formattedBody;

    const elevator = await prisma.elevator.findUnique({
      where: { id: parseInt(id) },
    });
    if (!elevator) {
      return res
        .status(404)
        .json({ success: false, message: "Elevator not found" });
    }

    // Check if new title already exists in another elevator
    if (title && title !== elevator.title) {
      const existingElevator = await prisma.elevator.findUnique({
        where: { title },
      });
      if (existingElevator) {
        return res
          .status(400)
          .json({ success: false, message: "Elevator title must be unique." });
      }
    }

    // Remove selected images
    let updatedImages = elevator.images.filter(
      (img) => !(removeImages || []).includes(img)
    );

    // Delete the images from the filesystem
    if (removeImages) {
      removeImages.forEach((img) => {
        const filePath = path.join("uploads", img);
        fs.unlink(filePath, (err) => {
          if (err) console.error(`Error deleting file ${img}:`, err);
        });
      });
    }

    // Convert newly uploaded images to .webp and add them to the list
    const newImages = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const filename = `${Date.now()}-${
          file.originalname.split(".")[0]
        }.webp`;
        const filepath = path.join("uploads", filename);

        await sharp(file.buffer).webp({ quality: 80 }).toFile(filepath);
        newImages.push(filename);
      }
    }

    updatedImages = [...updatedImages, ...newImages];

    if (updatedImages.length < 1 || updatedImages.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Total images must be between 1 and 20.",
      });
    }

    // Update the elevator record in the database
    const updatedElevator = await prisma.elevator.update({
      where: { id: parseInt(id) },
      data: {
        title: title || elevator.title,
        description: description || elevator.description,
        category: category || elevator.category,
        images: updatedImages,
        price: price ? parseFloat(price) : elevator.price,
      },
    });

    res.json({
      success: true,
      message: "Elevator updated successfully",
      data: updatedElevator,
    });
  } catch (error) {
    console.error("Error updating elevator:", error);
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(`uploads/${file.filename}`, (err) => {
          if (err) console.error("Error deleting file:", err);
        });
      });
    }
    res
      .status(500)
      .json({ success: false, message: "Error updating elevator" });
  }
};

// Get all elevators
export const getAllElevators = async (req, res) => {
  try {
    const elevators = await prisma.elevator.findMany();
    res.json({ success: true, data: elevators });
  } catch (error) {
    console.error("Error fetching elevators:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching elevators" });
  }
};

// Delete an elevator by ID
export const deleteElevatorById = async (req, res) => {
  try {
    const { id } = req.params;

    const elevator = await prisma.elevator.findUnique({
      where: { id: parseInt(id) },
    });
    if (!elevator) {
      return res
        .status(404)
        .json({ success: false, message: "Elevator not found" });
    }

    // Delete images from storage
    elevator.images.forEach((img) => {
      fs.unlink(`uploads/${img}`, (err) => {
        if (err) console.error(`Error deleting file ${img}:`, err);
      });
    });

    await prisma.elevator.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, message: "Elevator deleted successfully" });
  } catch (error) {
    console.error("Error deleting elevator:", error);
    res
      .status(500)
      .json({ success: false, message: "Error deleting elevator" });
  }
};

// Remove a specific image from an elevator
export const removeElevatorImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = req.body.image;

    console.log("Received ID:", id);
    console.log("Image to remove:", image);

    if (!image || typeof image !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid image name" });
    }

    const elevator = await prisma.elevator.findUnique({
      where: { id: parseInt(id) },
    });

    if (!elevator) {
      return res
        .status(404)
        .json({ success: false, message: "Elevator not found" });
    }

    console.log("Elevator images:", elevator.images);

    if (!elevator.images.includes(image)) {
      return res
        .status(400)
        .json({ success: false, message: "Image not found in elevator" });
    }

    // Remove image from array
    const updatedImages = elevator.images.filter((img) => img !== image);

    // Delete image from filesystem
    fs.unlink(`uploads/${image}`, (err) => {
      if (err) console.error(`Error deleting file ${image}:`, err);
    });

    // Update database
    await prisma.elevator.update({
      where: { id: parseInt(id) },
      data: { images: updatedImages },
    });

    res.json({ success: true, message: "Image removed successfully" });
  } catch (error) {
    console.error("Error removing image:", error);
    res.status(500).json({ success: false, message: "Error removing image" });
  }
};

export const getAdminDashboardStats = async (req, res) => {
  try {
    // Get total number of projects
    const projectCount = await prisma.project.count();

    // Get total number of elevators
    const elevatorCount = await prisma.elevator.count();

    // Get distinct categories for projects by using findMany and grouping by category
    const categories = await prisma.project.findMany({
      select: {
        category: true,
      },
      distinct: ["category"],
    });
    const categoryCount = categories.length;

    // Get all projects and count total images from the images array
    const projects = await prisma.project.findMany({
      select: {
        images: true,
      },
    });
    const totalImages = projects.reduce(
      (sum, project) => sum + (project.images ? project.images.length : 0),
      0
    );

    res.json({
      success: true,
      data: {
        projectCount,
        elevatorCount,
        categoryCount,
        totalImages,
      },
    });
  } catch (error) {
    console.error("Error fetching admin dashboard stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching admin dashboard stats",
    });
  }
};
