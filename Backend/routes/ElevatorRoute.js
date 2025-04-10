import express from "express";
import multer from "multer";
import {
  addElevator,
  deleteElevatorById,
  getAdminDashboardStats,
  getAllElevators,
  removeElevatorImage,
  updateElevatorById,
} from "../controller/ElevatorControl.js";

// Use memory storage to handle image buffers before saving to disk
const storage = multer.memoryStorage();
const upload = multer({ storage });

const ElevatorRouter = express.Router();

ElevatorRouter.post("/add", upload.array("images", 20), addElevator);
ElevatorRouter.get("/list", getAllElevators);
ElevatorRouter.delete("/delete/:id", deleteElevatorById);
ElevatorRouter.put(
  "/update/:id",
  upload.array("images", 20),
  updateElevatorById
);
ElevatorRouter.put("/remove-image/:id", removeElevatorImage);
ElevatorRouter.get("/dashboard-status", getAdminDashboardStats);

export default ElevatorRouter;
