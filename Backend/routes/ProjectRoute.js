import express from "express";
import multer from "multer";
import {
  Add_Project,
  deleteProjectById,
  getAllProjects,
  updateProjectById,
} from "../controller/ProjectControl.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const ProjectRouter = express.Router();

ProjectRouter.post("/add", upload.array("images", 20), Add_Project);
ProjectRouter.get("/list", getAllProjects);
ProjectRouter.put("/update/:id", upload.array("images", 20), updateProjectById);
ProjectRouter.delete("/delete/:id", deleteProjectById);

export default ProjectRouter;
