import express from "express";
import { Admin_Login, Create_Admin } from "../controller/UserControl.js";

const userRouter = express.Router();

// userRouter.post("/register", registerUser);
userRouter.post("/login", Admin_Login);

Create_Admin();
//
// userRouter.get("/check", auth_user, checkUserTerm);
// userRouter.post("/update-term", auth_user, updateUserTerm);

export default userRouter;
