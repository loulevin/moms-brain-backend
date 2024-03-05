import { handleError } from "../utils/tools.js";
import { Appointment } from "../schemas/appointmentSchema.js";

export const addSingleAppointment = async (req, res) => {
  try {
    const singleAppointment = await Appointment.create(req.body);
    res.status(201).json(singleAppointment);
  } catch (e) {
    handleError(res, e);
  }
};

export const getSingleAppointment = async (req, res) => {
  try {
    const singleAppointment = await Appointment.findById(req.params.id);
    res.status(200).json(singleAppointment);
  } catch (e) {
    handleError(res, e);
  }
};

export const getAllAppointment = async (req, res) => {
  try {
    const allAppointment = await Appointment.find();
    res.status(200).json(allAppointment);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleAppointment = async (req, res) => {
  try {
    const singleAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!singleAppointment) {
      return res
        .status(404)
        .json({ msg: `Appointment not found with id ${req.params.id}` });
    }
    res.status(200).json(singleAppointment);
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleAppointment = async (req, res) => {
  try {
    const singleAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );
    if (!singleAppointment) {
      return res
        .status(404)
        .json({ msg: `Appointment not found ${req.params.id}` });
    }
    res.status(200).json(singleAppointment);
  } catch (e) {
    handleError(res, e);
  }
};
