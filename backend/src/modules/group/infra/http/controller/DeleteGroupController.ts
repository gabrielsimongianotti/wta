
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RemoveGroupService from '@modules/group/services/RemoveGroupService';

export default class UpdateGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeGroup = container.resolve(RemoveGroupService);

    const group = await removeGroup.execute(id);

    return response.status(201).send();
  }
}
