import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListGiftsService from '@modules/gifts/services/ListGiftsService';

export default class ListGiftsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listGifts = container.resolve(ListGiftsService);

    const list = await listGifts.execute();

    return response.json(classToClass(list));
  }
}
