import fs from "fs";
import ProjectModel from "../models/ProjectModel.js"; // Import your MongoDB model

export const Add_Project = async (req, res) => {
  try {
    const { title, description, address, googleMapLink, category, status } =
      req.body;

    // Extract image filenames
    const images = req.files ? req.files.map((file) => file.filename) : [];

    // Create and save the project in MongoDB
    const newProject = new ProjectModel({
      title,
      description,
      address,
      googleMapLink,
      images, // Store array of image filenames
      category,
      status,
      startDate: req.body.startDate ? new Date(req.body.startDate) : null,
      completionDate: req.body.completionDate
        ? new Date(req.body.completionDate)
        : null,
    });

    await newProject.save();

    res.json({
      success: true,
      message: "Project added successfully",
      data: newProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);

    // Delete uploaded files if an error occurs
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(`uploads/${file.filename}`, (err) => {
          if (err) console.error("Error deleting file:", err);
        });
      });
    }

    res.status(500).json({ success: false, message: "Error adding project" });
  }
};
