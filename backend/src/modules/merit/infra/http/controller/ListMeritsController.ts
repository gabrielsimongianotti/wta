import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListMeritsService from '@modules/merit/services/ListMeritsService';

export default class ListMeritsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMerit = container.resolve(ListMeritsService);

    const list = await listMerit.execute();

    return response.json(classToClass(list));
  }
}
