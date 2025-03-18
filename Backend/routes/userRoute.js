import express from "express";
import {
  Admin_Login,
  Create_Admin,
  Get_Admin_Data,
} from "../controller/UserControl.js";

const userRouter = express.Router();

userRouter.post("/login", Admin_Login);

userRouter.get("/data", Get_Admin_Data);

Create_Admin();

export default userRouter;
