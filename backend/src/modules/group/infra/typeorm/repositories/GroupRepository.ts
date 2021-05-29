import { getRepository, Repository } from 'typeorm';

import IGroupRepository from '@modules/group/repositories/IGroupRepository';
import ICreateGroupDTO from '@modules/group/dtos/ICreateGroupDTO';
import IFindAllInWeekFromGroupDTO from '@modules/group/dtos/IFindAllInWeekFromGroupDTO';
import Group from '@modules/group/infra/typeorm/entities/Group';
import IUpdateGroupDTO from '@modules/group/dtos/IUpdateGroupDTO';

class GroupRepository implements IGroupRepository {
  private ormRepository: Repository<Group>;

  constructor() {
    this.ormRepository = getRepository(Group);
  }

  public compareTime({
    oneTime,
    secondTime,
  }: {
    oneTime: string;
    secondTime: string;
  }): boolean {
    if (oneTime === secondTime) {
      return true;
    }

    const time1 = oneTime.split(':');
    const time2 = secondTime.split(':');

    for (let i = 0; i < time1.length; i += 1) {
      if (time1[i] > time2[i]) {
        return true;
      }
      if (time1[i] < time2[i]) {
        return false;
      }
    }
    return false;
  }

  public async validId(id: string): Promise<boolean> {
    const group = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return !group.length;
  }

  public async findByYourGroup(id: string): Promise<Group[]> {
    const findGroup = await this.ormRepository.find({
      where: [
        {
          user_master_id: id,
        },
        {
          user_fifth_id: id,
        },
        {
          user_first_id: id,
        },
        {
          user_secund_id: id,
        },
        {
          user_fourth_id: id,
        },
        {
          user_seventh_id: id,
        },
        {
          user_sixth_id: id,
        },
        {
          user_third_id: id,
        },
      ],
    });

    return findGroup;
  }


  public async findAllInWeekGroup({
    id,
    weekday,
    initialHours,
    endHours,
  }: IFindAllInWeekFromGroupDTO): Promise<Group[]> {
    const findWeekday = await this.ormRepository.find({
      where: [{
        user_master_id: id,
        weekday,
      },
      {
        user_fifth_id: id,
        weekday,
      },
      {
        user_secund_id: id,
        weekday,
      },
      {
        user_third_id: id,
        weekday,
      },
      {
        user_fourth_id: id,
        weekday,
      },
      {
        user_fifth_id: id,
        weekday,
      },
      {
        user_sixth_id: id,
        weekday,
      },
      {
        user_seventh_id: id,
        weekday,
      },
      ]
    });

    const findGroup = await findWeekday.filter(
      (week) =>
        this.compareTime({
          oneTime: endHours,
          secondTime: week.initialHours
        }) &&
        this.compareTime({
          oneTime: week.endHours,
          secondTime: initialHours
        })
    );

    return findGroup;
  }

  public async create({
    endHours,
    initialHours,
    name,
    weekday,
    user_first_id = null,
    user_secund_id = null,
    user_third_id = null,
    user_fourth_id = null,
    user_fifth_id = null,
    user_sixth_id = null,
    user_seventh_id = null,
    user_master_id,
  }: ICreateGroupDTO): Promise<Group> {
    const groups = this.ormRepository.create({
      weekday,
      name,
      initialHours,
      endHours,
      user_master_id,
      user_first_id,
      user_secund_id,
      user_third_id,
      user_fourth_id,
      user_fifth_id,
      user_sixth_id,
      user_seventh_id,
    });

    await this.ormRepository.save(groups);

    return groups;
  }

  public async updata(updateGroups: IUpdateGroupDTO): Promise<Group> {
    const edit = await this.ormRepository.save(updateGroups);

    return edit;
  }

  public async findById(id: string): Promise<Group | undefined> {

    const group = this.ormRepository.findOne({
      where: { id },
    });

    return group;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default GroupRepository;
