import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema(
  {
    task: String,
    status: String,
    completed: Boolean,
  }
);
