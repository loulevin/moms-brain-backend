import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema(
  {
    task: String,
    completed: Boolean,
  }
);
