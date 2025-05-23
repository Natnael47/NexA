import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/mongodb.js";
import ElevatorRouter from "./routes/ElevatorRoute.js";
import ProjectRouter from "./routes/ProjectRoute.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Api endpoints
app.get("/", (req, res) => {
  res.send("Api Start Working!");
});
app.use("/images", express.static("uploads"));
app.use("/api/admin", userRouter);
app.use("/api/project", ProjectRouter);
app.use("/api/elevator", ElevatorRouter);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
