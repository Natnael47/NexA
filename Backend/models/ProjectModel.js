import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    googleMapLink: { type: String, required: true }, // Stores Google Maps URL
    images: { type: Array, required: true }, // Array of image URLs
    category: {
      type: String,
      enum: ["Residential", "Commercial", "Infrastructure"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Ongoing", "Completed", "Upcoming"],
      default: "Ongoing",
    },
    startDate: { type: Date },
    completionDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
  },
  { minimize: false }
);

const ProjectModel =
  mongoose.models.Project_Data || mongoose.model("Project_Data", projectSchema);

export default ProjectModel;
