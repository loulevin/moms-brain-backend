import express from "express";
import {
  addSingleAppointment,
  getSingleAppointment,
  getAllAppointment,
  updateSingleAppointment,
  deleteSingleAppointment,
} from "../controllers/appointmentController.js";

export const appointmentRouter = express.Router();

appointmentRouter
  .route("/")
  .post(addSingleAppointment)
  .get(getAllAppointment);
appointmentRouter
  .route("/:id")
  .get(getSingleAppointment)
  .patch(updateSingleAppointment)
  .delete(deleteSingleAppointment);
