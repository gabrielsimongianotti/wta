import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateGroupService from '@modules/group/services/CreateGroupService';

export default class CreateGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createGroup = container.resolve(CreateGroupService);

    const group = await createGroup.execute(data);

    return response.json(group);
  }
}
