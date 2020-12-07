import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateBackgroundsService from '@modules/backgrounds/services/CreateBackgroundsService';

export default class CreateBackgroundsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, level } = request.body;

    const createBackgrounds = container.resolve(CreateBackgroundsService);

    const background = await createBackgrounds.execute({
      description,
      name,
      level,
    });

    return response.json(classToClass(background));
  }
}
