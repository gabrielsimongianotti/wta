import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateGroupService from '@modules/group/services/CreateGroupService';

export default class CreateGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {
      endHours,
      initialHours,
      name,
      user_fifth_id,
      user_master_id,
      user_first_id,
      user_fourth_id,
      user_secund_id,
      user_seventh_id,
      user_sixth_id,
      user_third_id,
      weekday,
    } = request.body;

    const createGroup = container.resolve(CreateGroupService);

    const group = await createGroup.execute({
      endHours,
      initialHours,
      name,
      user_fifth_id,
      user_master_id,
      user_first_id,
      user_fourth_id,
      user_secund_id,
      user_seventh_id,
      user_sixth_id,
      user_third_id,
      weekday,
    });

    return response.json(group);
  }
}
