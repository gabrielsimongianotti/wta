import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListFetichesService from '@modules/fetiches/services/ListFetichesService';

export default class ListFetichesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listFetiches = container.resolve(ListFetichesService);

    const list = await listFetiches.execute();

    return response.json(classToClass(list));
  }
}
