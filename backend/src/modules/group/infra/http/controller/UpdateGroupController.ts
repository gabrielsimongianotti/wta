import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateGroupService from '@modules/group/services/UpdateGroupService';

export default class UpdateGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const updateGroup = container.resolve(UpdateGroupService);

    const group = await updateGroup.execute(data);

    return response.json(group);
  }
}