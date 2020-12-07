import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListBackgroundsService from '@modules/backgrounds/services/ListBackgroundsService';

export default class ListBackgroundsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBackgrounds = container.resolve(ListBackgroundsService);

    const list = await listBackgrounds.execute();

    return response.json(classToClass(list));
  }
}
