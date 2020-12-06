import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListRitesService from '@modules/rites/services/ListRitesService';

export default class ListRitesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRites = container.resolve(ListRitesService);

    const list = await listRites.execute();

    return response.json(classToClass(list));
  }
}
