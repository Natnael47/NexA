import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import AdminModel from "../models/AdminModel.js";

dotenv.config(); // Load .env variables

const createToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Route for Admin Login
const Admin_Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists in the database
    const admin = await AdminModel.findOne({ email });

    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        const token = createToken(admin._id);
        return res.json({ success: true, token });
      } else {
        return res.json({ success: false, message: "Incorrect password" });
      }
    }

    // If no match in DB, check .env credentials
    if (
      email === process.env.ADMIN_EMAIL.trim() && // Trim to remove unwanted spaces
      password === process.env.ADMIN_PASSWORD.trim()
    ) {
      const token = jwt.sign(
        { email: process.env.ADMIN_EMAIL },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      return res.json({ success: true, token });
    }

    // If no match in both database and .env file
    return res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Automatically create a new Admin
const Create_Admin = async () => {
  try {
    // Check if an admin already exists
    const adminExists = await AdminModel.findOne();

    if (adminExists) {
      console.log("Admin account already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("1q2w3e4r", 10);

    // Create a new admin
    const newAdmin = new AdminModel({
      name: "Admin",
      email: "admin@NexA.com",
      password: hashedPassword,
      status: "Active",
    });

    await newAdmin.save();
    console.log("Admin account has been created successfully.");
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};

// Route to get the admin data
const Get_Admin_Data = async (req, res) => {
  try {
    // Find the admin in the database (assuming only one admin exists)
    const admin = await AdminModel.findOne();

    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    // Remove the password from the response for security reasons
    admin.password = undefined;

    return res.json({ success: true, data: admin });
  } catch (error) {
    console.error("Error fetching admin data:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export { Admin_Login, Create_Admin, Get_Admin_Data };
