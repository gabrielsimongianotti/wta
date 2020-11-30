import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateFlawService from '@modules/flaw/services/CreateFlawService';

export default class CreateFlawController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, bonus, system, type } = request.body;

    const createFlaw = container.resolve(CreateFlawService);

    const flaw = await createFlaw.execute({
      description,
      name,
      bonus,
      system,
      type,
    });

    return response.json(classToClass(flaw));
  }
}
