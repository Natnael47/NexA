import express from "express";
import { Add_Project } from "../controller/ProjectControl.js";

const ProjectRouter = express.Router();

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Ensure unique filenames
  },
});

const upload = multer({ storage });

ProjectRouter.post("/add", upload.array("images", 4), Add_Project);

export default ProjectRouter;
