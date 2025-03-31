import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

// Add a new elevator entry
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

    const images = req.files ? req.files.map((file) => file.filename) : [];

    if (images.length < 1 || images.length > 20) {
      return res.status(400).json({
        success: false,
        message: "You must upload between 1 and 20 images.",
      });
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

    let updatedImages = elevator.images.filter(
      (img) => !(removeImages || []).includes(img)
    );
    const newImages = req.files ? req.files.map((file) => file.filename) : [];
    updatedImages = [...updatedImages, ...newImages];

    if (updatedImages.length < 1 || updatedImages.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Total images must be between 1 and 20.",
      });
    }

    if (removeImages) {
      removeImages.forEach((img) => {
        fs.unlink(`uploads/${img}`, (err) => {
          if (err) console.error(`Error deleting file ${img}:`, err);
        });
      });
    }

    // Ensure all fields are updated, even if they are not present in the request
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
