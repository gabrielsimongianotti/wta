import IGroupRepository from '@modules/group/repositories/IGroupRepository';
import ICreateGroupDTO from '@modules/group/dtos/ICreateGroupDTO';
import IFindAllInWeekFromGroupDTO from '@modules/group/dtos/IFindAllInWeekFromGroupDTO';
import IUpdateGroupDTO from '@modules/group/dtos/IUpdateGroupDTO';
import Group from '@modules/group/infra/typeorm/entities/Group';
import { uuid } from 'uuidv4';

class FakeGroupRepository implements IGroupRepository {
  private groups: Group[] = [];

  public async updata(data: IUpdateGroupDTO): Promise<Group> {
    const group = new Group();
    const position = await this.groups.findIndex(
      oldGroup => oldGroup.id === data.id,
    );

    await Object.assign(group, data);

    this.groups[position] = group;

    return group;
  }

  public async validId(id: string): Promise<true | false> {
    const groups = await this.groups.filter(group => group.id === id);

    return !groups.length;
  }

  public async findById(id: string): Promise<Group | undefined> {
    const selectedGroup = this.groups.find(group => group.id === id);

    return selectedGroup;
  }

  public async delete(id: string): Promise<void> {
    await this.groups.splice(
      this.groups.findIndex(group => group.id === id),
      1,
    );
  }

  public async compareTime({
    oneTime,
    secondTime,
  }: {
    oneTime: string;
    secondTime: string;
  }): Promise<true | false> {
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

  public async findAllInWeekGroup({
    endHours,
    id,
    weekday,
    initialHours,
  }: IFindAllInWeekFromGroupDTO): Promise<Group[]> {
    const findWeekday = this.groups.filter(
      group =>
        (group.user_fifth_id === id ||
          group.user_master_id === id ||
          group.user_first_id === id ||
          group.user_secund_id === id ||
          group.user_fourth_id === id ||
          group.user_seventh_id === id ||
          group.user_third_id === id ||
          group.user_sixth_id === id) &&
        group.weekday === weekday,
    );

    const findGroup = findWeekday.filter(
      week =>
        this.compareTime({
          oneTime: week.initialHours,
          secondTime: initialHours,
        }) &&
        this.compareTime({ oneTime: week.endHours, secondTime: endHours }),
    );

    return findGroup;
  }

  public async findByYourGroup(id: string): Promise<Group[]> {
    const findGroup = await this.groups.filter(
      group =>
        group.user_fifth_id === id ||
        group.user_master_id === id ||
        group.user_first_id === id ||
        group.user_secund_id === id ||
        group.user_fourth_id === id ||
        group.user_seventh_id === id ||
        group.user_third_id === id ||
        group.user_sixth_id === id,
    );

    return findGroup;
  }

  public async create({
    endHours,
    initialHours,
    name,
    user_fifth_id,
    user_first_id,
    user_fourth_id,
    user_master_id,
    user_secund_id,
    user_seventh_id,
    user_sixth_id,
    user_third_id,
    weekday,
  }: ICreateGroupDTO): Promise<Group> {
    const group = new Group();

    Object.assign(group, {
      id: uuid(),
      endHours,
      initialHours,
      name,
      user_fifth_id,
      user_first_id,
      user_fourth_id,
      user_master_id,
      user_secund_id,
      user_seventh_id,
      user_sixth_id,
      user_third_id,
      weekday,
    });

    this.groups.push(group);

    return group;
  }
}

export default FakeGroupRepository;
