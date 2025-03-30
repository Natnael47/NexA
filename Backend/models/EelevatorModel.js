import mongoose from "mongoose";

const ElevatorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    category: { type: String, required: true },
    price: { type: Number, default: 0.0 },
    createdAt: { type: Date, default: Date.now },
  },
  { minimize: false }
);

const ElevatorModel =
  mongoose.models.Elevator_Data ||
  mongoose.model("Elevator_Data", ElevatorSchema);

export default ElevatorModel;
