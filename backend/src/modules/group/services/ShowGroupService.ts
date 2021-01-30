import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';

import IGroupRepository from '../repositories/IGroupRepository';

import Group from '../infra/typeorm/entities/Group';

@injectable()
class ShowGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository,
  ) {}

  public async execute(id: string): Promise<Group[]> {
    const groups = await this.groupRepository.findByYourGroup(id);

    if (!groups.length) throw new AppError('id is`not valid');

    return groups;
  }
}

export default ShowGroupService;
