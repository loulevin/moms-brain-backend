import mongoose from "mongoose";

export const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    dayOfWeek: { type: String, required: true },
    appointments: [
      {
        startTime: { type: String, required: true },
        endTime: { type: String, required: true},
        title: { type: String, required: true},
        description: { type: String },
      },
    ],
  },
  {
    collection: "appointment",
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
