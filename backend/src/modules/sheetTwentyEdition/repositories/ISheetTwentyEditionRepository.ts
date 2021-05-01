import SheetTwentyEdition from '../infra/typeorm/entities/SheetTwentyEdition';
import ICreateTwentyEditionpDTO from '../dtos/ICreateTwentyEditionpDTO';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';
import Users from '@modules/users/infra/typeorm/entities/Users';
import Group from '@modules/group/infra/typeorm/entities/Group';

export default interface ISheetTwentyEditionRepository {
  create(data: ICreateTwentyEditionpDTO): Promise<SheetTwentyEdition>;
  update(data: IUpdataTwentyEditionpDTO): Promise<SheetTwentyEdition>;
  findByIdUser(id: string): Promise<Users | undefined>
  findByIdGroup(id: string): Promise<Group | undefined>
  findByIdGroupAndIdUser({ user_id, group_id }: { user_id: string, group_id: string; }): Promise<SheetTwentyEdition | undefined>
  findByIdSheet(id: string): Promise<SheetTwentyEdition | undefined>
  delete({ id }: { id: string }): Promise<void>
}
