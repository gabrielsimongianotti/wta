import SheetTwentyEdition from '../infra/typeorm/entities/SheetTwentyEdition';
import ICreateTwentyEditionpDTO from '../dtos/ICreateTwentyEditionpDTO';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';
import Users from '@modules/users/infra/typeorm/entities/Users';

export default interface ISheetTwentyEditionRepository {
  create(data: ICreateTwentyEditionpDTO): Promise<SheetTwentyEdition>;
  update(data: IUpdataTwentyEditionpDTO): Promise<SheetTwentyEdition>;
  findByIdUser({ id }: { id: string }): Promise<Users | undefined>
  findByIdSheet({ id }: { id: string }): Promise<SheetTwentyEdition | undefined>
  delete({ id }: { id: string }): Promise<void>
}
