import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ShowGroupService from '@modules/group/services/ShowGroupService';

export default class ShowGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showGroup = container.resolve(ShowGroupService);
    const group = await showGroup.execute(id);

    return response.json(classToClass(group));
  }
}
