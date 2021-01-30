import Group from '../infra/typeorm/entities/Group';
import ICreateGroupDTO from '../dtos/ICreateGroupDTO';
import IUpdateGroupDTO from '../dtos/IUpdateGroupDTO';
import IFindAllInWeekFromGroupDTO from '../dtos/IFindAllInWeekFromGroupDTO';

export default interface IGroupRepository {
  create(data: ICreateGroupDTO): Promise<Group>;
  updata(data: IUpdateGroupDTO): Promise<Group>;
  findById(id: string): Promise<Group | undefined>;
  validId(id: string): Promise<true | false>;
  delete(id: string): Promise<void>;
  findAllInWeekGroup(data: IFindAllInWeekFromGroupDTO): Promise<Group[]>;
  findByYourGroup(id: string): Promise<Group[]>;
  compareTime({
    oneTime,
    secondTime,
  }: {
    oneTime: string;
    secondTime: string;
  }): Promise<true | false>;
}
