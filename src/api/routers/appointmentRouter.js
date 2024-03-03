import express from "express";
import {
  addSingleAppointment,
  getSingleAppointment,
  updateSingleAppointment,
  deleteSingleAppointment,
} from "../controllers/appointmentController.js";

export const appointmentRouter = express.Router();

appointmentRouter
  .route("/")
  .post(addSingleAppointment)
  .get(getSingleAppointment);
appointmentRouter
  .route("/:id")
  .get(getSingleAppointment)
  .patch(updateSingleAppointment)
  .delete(deleteSingleAppointment);
