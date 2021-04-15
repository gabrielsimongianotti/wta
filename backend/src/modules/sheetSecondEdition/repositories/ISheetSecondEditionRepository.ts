import SheetSecondEdition from '../infra/typeorm/entities/SheetSecondEdition';
import ICreateSheetSecondEditionDTO from '../dtos/ICreateSecondEditionpDTO';
import IUpdateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/IUpdataSecondEditionpDTO';
import Users from '@modules/users/infra/typeorm/entities/Users';

export default interface ISheetSecondEditionRepository {
  create(data: ICreateSheetSecondEditionDTO): Promise<SheetSecondEdition>;
  update(data: IUpdateSecondEditionpDTO): Promise<SheetSecondEdition>;
  findByIdUser({ id }: { id: string }): Promise<Users | undefined>
  findByIdSheet({ id }: { id: string }): Promise<SheetSecondEdition | undefined>
}
