import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateRitesService from '@modules/rites/services/CreateRitesService';

export default class CreateRitesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, level, system } = request.body;

    const createRites = container.resolve(CreateRitesService);

    const rite = await createRites.execute({
      description,
      name,
      level,
      system,
    });

    return response.json(classToClass(rite));
  }
}
