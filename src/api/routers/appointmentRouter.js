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
