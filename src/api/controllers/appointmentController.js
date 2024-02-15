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

