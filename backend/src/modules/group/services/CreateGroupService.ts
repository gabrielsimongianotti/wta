import { inject, injectable } from 'tsyringe';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import AppError from '@shared/erros/AppError';
import ICreateGroup from '../dtos/ICreateGroupDTO';
import IGroupRepository from '../repositories/IGroupRepository';

import Group from '../infra/typeorm/entities/Group';

@injectable()
class CreateGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { }

  public async execute(data: ICreateGroup): Promise<Group> {
    const { initialHours, endHours, user_master_id, weekday, name } = data;
    const validateTime = await this.groupRepository.compareTime({
      oneTime: initialHours,
      secondTime: endHours,
    });

    if (validateTime) {
      throw new AppError('vc vai virar a noite jogando?');
    }

    const busyDay = await this.groupRepository.findAllInWeekGroup({
      endHours: endHours,
      id: user_master_id,
      initialHours: initialHours,
      weekday: weekday,
    });

    if (busyDay.length) {
      throw new AppError('Este horario ja te mesa nesse horario');
    }

    const group = await this.groupRepository.create(data);

    this.cacheProvider.invalidate(
      `provider-groups:${name}:${weekday}:${initialHours}:${endHours}:${weekday}`,
    );

    return group;
  }
}

export default CreateGroupService;
