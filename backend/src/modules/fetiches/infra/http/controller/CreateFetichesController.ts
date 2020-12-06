import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateFeticheService from '@modules/fetiches/services/CreateFeticheService';

export default class CreateFetichesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, level, system } = request.body;

    const createFetiche = container.resolve(CreateFeticheService);

    const fetiche = await createFetiche.execute({
      description,
      name,
      level,
      system,
    });

    return response.json(classToClass(fetiche));
  }
}
