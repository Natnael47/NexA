import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  },
  { minimize: false }
);

// Prevent multiple admin accounts
adminSchema.statics.isAdminExists = async function () {
  const count = await this.countDocuments();
  return count >= 1;
};

const AdminModel =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default AdminModel;
