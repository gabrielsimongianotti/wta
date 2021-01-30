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

  public async execute({
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
  }: ICreateGroup): Promise<Group> {
    const validateTime = await this.groupRepository.compareTime({
      oneTime: initialHours,
      secondTime: endHours,
    });

    if (validateTime) {
      throw new AppError('vc vai virar a noite jogando?');
    }

    const busyDay = await this.groupRepository.findAllInWeekGroup({
      endHours,
      id: user_master_id,
      initialHours,
      weekday,
    });

    if (busyDay.length) {
      throw new AppError('Este horario ja te mesa nesse horario');
    }

    const group = await this.groupRepository.create({
      endHours,
      initialHours,
      name,
      user_first_id,
      user_secund_id,
      user_third_id,
      user_fourth_id,
      user_fifth_id,
      user_sixth_id,
      user_seventh_id,
      user_master_id,
      weekday,
    });

    this.cacheProvider.invalidate(
      `provider-groups:${name}:${user_master_id}:${initialHours}:${endHours}:${weekday}`,
    );

    return group;
  }
}

export default CreateGroupService;
