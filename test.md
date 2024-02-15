appointmentSchema.js

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

appointmentControllers.js

import { handleError } from '../utils/tools.js';
import { Appointment } from '../schemas/appointmentSchema.js';

export const addSingleAppointment = async (req, res) => {
    try {
        const singleAppointment = await Appointment.create(req.body);
        return res.status(201).json(singleAppointment);
    } catch (e) {
        handleError(res, e);
    }
}

export const getSingleAppointment = async (req, res) => {
    try {
        const singleAppointment = await Appointment.findById(req.params.id)
        return res.status(200).json(singleAppointment)
    } catch (e) {
        handleError(res, e);
    }
}

appointmentRouter.js

import express from "express";
import {
  addSingleAppointment,
  getSingleAppointment,
} from "../controllers/appointmentController";

export const appointmentRouter = express.Router();

appointmentRouter
  .route("/")
  .post(addSingleAppointment)
  .get(getSingleAppointment);

test.rest

@url = http://localhost:4510

### ADD SINGLE APPOINTMENT
POST {{url}}/appointments
Content-Type: application/json

{
    "date": "2021-12-12",
    "dayOfWeek": "Monday",
    "appointment": [
        "startTime": "10:00",
        "endTime": "11:00",
        "title": "Meeting with John Doe",
        "description": "Discussing the new project",
    ]
}
