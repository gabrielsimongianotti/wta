import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import IUpdateGroupDTO from '../dtos/IUpdateGroupDTO';
import IGroupRepository from '../repositories/IGroupRepository';

import Group from '../infra/typeorm/entities/Group';

interface IRequest extends IUpdateGroupDTO {
  id: string;
}

@injectable()
class ShowGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository,
  ) { }

  public async execute(data: IRequest): Promise<Group> {
    const {
      endHours,
      initialHours,
      user_master_id,
      weekday,
    } = data;

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


    const groups = await this.groupRepository.updata(data);

    return groups;
  }
}

export default ShowGroupService;
