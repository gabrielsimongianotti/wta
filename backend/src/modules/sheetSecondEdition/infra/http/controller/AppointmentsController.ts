import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppointment = container.resolve(AppointmentService);

    const appointment = await createAppointment.execute({
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}