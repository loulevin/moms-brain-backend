import mongoose from "mongoose";

export const appointmentSchema = new mongoose.Schema(
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
    collection: "appointment",
    timestamps: true,
  }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema)
