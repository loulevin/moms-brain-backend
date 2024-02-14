import mongoose from "mongoose";

export const calenderSchema = new mongoose.Schema(
  {
    date: Date,
    dayOfWeek: String,
    appointments: [
      {
        startTime: Number,
        endTime: Number,
        title: String,
        description: String,
      },
    ],
  },
  {
    collection: "calender",
    timestamps: true,
  }
);

export const Calender = mongoose.model('Calender', calenderSchema)
