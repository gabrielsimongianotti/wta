import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateGiftsService from '@modules/gifts/services/CreateGiftsService';

export default class CreateGiftsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { description, name, level, system } = request.body;

    const createUser = container.resolve(CreateGiftsService);

    const user = await createUser.execute({ description, name, level, system });

    return response.json(classToClass(user));
  }
}
