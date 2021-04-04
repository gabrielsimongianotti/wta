import SheetSecondEdition from '../infra/typeorm/entities/SheetSecondEdition';
import ICreateSheetSecondEditionDTO from '../dtos/ICreateSecondEditionpDTO';
import Users from '@modules/users/infra/typeorm/entities/Users';

export default interface ISheetSecondEditionRepository {
  create(data: ICreateSheetSecondEditionDTO): Promise<SheetSecondEdition>;
  findByIdUser({ id }: { id: string }): Promise<Users | undefined>
}
