import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListFlawService from '@modules/flaw/services/ListFlawService';

export default class ListFlawController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listFlaw = container.resolve(ListFlawService);

    const list = await listFlaw.execute();

    return response.json(classToClass(list));
  }
}
