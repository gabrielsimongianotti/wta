import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ICreateGroupDTO from '../dtos/ICreateGroupDTO';
import IGroupRepository from '../repositories/IGroupRepository';

import Group from '../infra/typeorm/entities/Group';

interface IRequest extends ICreateGroupDTO {
  id: string;
}

@injectable()
class ShowGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository,
  ) {}

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
    id,
  }: IRequest): Promise<Group> {
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

    const groups = await this.groupRepository.updata({
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
      id,
    });

    return groups;
  }
}

export default ShowGroupService;
