import express from "express";
import multer from "multer";
import {
  addElevator,
  deleteElevatorById,
  getAllElevators,
  updateElevatorById,
} from "../controller/ElevatorPrisControl.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

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

export default ElevatorRouter;
