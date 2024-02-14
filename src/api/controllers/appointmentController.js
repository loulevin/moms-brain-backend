import { handleError } from '../utils/tools.js';
import { Appointment } from '../schemas/appointmentSchema.js';

export const addSingleAppointment = async (req, res) => {
    try {
        const singleAppointment = new Appointment(req.body);
    } catch (e) {
        handleError(res, e);
    }
}

