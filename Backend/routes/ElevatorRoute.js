import express from "express";
import {
  addElevator,
  deleteElevatorById,
  getAdminDashboardStats,
  getAllElevators,
  removeElevatorImage,
  updateElevatorById,
} from "../controller/ElevatorControl.js";
import upload from "../middleWare/multerConfig.js";

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
