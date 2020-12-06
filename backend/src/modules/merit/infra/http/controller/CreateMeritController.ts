import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateMeritService from '@modules/merit/services/CreateMeritService';

export default class CreateMeritController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, type, cost, system } = request.body;

    const createMerit = container.resolve(CreateMeritService);

    const merit = await createMerit.execute({
      description,
      name,
      type,
      cost,
      system,
    });

    return response.json(classToClass(merit));
  }
}
