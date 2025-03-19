import fs from "fs";
import ProjectModel from "../models/ProjectModel.js";

// Add a new project with image constraints (1-20 images) and unique title
export const Add_Project = async (req, res) => {
  try {
    const { title, description, address, googleMapLink, category, status } =
      req.body;

    // Check if project with the same title exists
    const existingProject = await ProjectModel.findOne({ title });
    if (existingProject) {
      return res
        .status(400)
        .json({ success: false, message: "Project title must be unique." });
    }

    const images = req.files ? req.files.map((file) => file.filename) : [];

    if (images.length < 1 || images.length > 20) {
      return res.status(400).json({
        success: false,
        message: "You must upload between 1 and 20 images.",
      });
    }

    const newProject = new ProjectModel({
      title,
      description,
      address,
      googleMapLink,
      images,
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

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching projects" });
  }
};

// Delete project by ID
export const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    // Delete images from storage
    project.images.forEach((img) => {
      fs.unlink(`uploads/${img}`, (err) => {
        if (err) console.error(`Error deleting file ${img}:`, err);
      });
    });

    await ProjectModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ success: false, message: "Error deleting project" });
  }
};

// Update project by ID with unique title check and image constraints
export const updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      address,
      googleMapLink,
      category,
      status,
      startDate,
      completionDate,
      removeImages,
    } = req.body;

    const project = await ProjectModel.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    // Check if new title already exists in another project
    if (title && title !== project.title) {
      const existingProject = await ProjectModel.findOne({ title });
      if (existingProject) {
        return res
          .status(400)
          .json({ success: false, message: "Project title must be unique." });
      }
    }

    let updatedImages = project.images.filter(
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

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        address,
        googleMapLink,
        images: updatedImages,
        category,
        status,
        startDate: startDate ? new Date(startDate) : project.startDate,
        completionDate: completionDate
          ? new Date(completionDate)
          : project.completionDate,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(`uploads/${file.filename}`, (err) => {
          if (err) console.error("Error deleting file:", err);
        });
      });
    }
    res.status(500).json({ success: false, message: "Error updating project" });
  }
};
