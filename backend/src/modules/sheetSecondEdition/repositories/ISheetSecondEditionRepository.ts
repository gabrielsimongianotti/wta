import SheetSecondEdition from '../infra/typeorm/entities/SheetSecondEdition';
import ICreateSheetSecondEditionDTO from '../dtos/ICreateSecondEditionpDTO';

export default interface ISheetSecondEditionRepository {
  create(data: ICreateSheetSecondEditionDTO): Promise<SheetSecondEdition>;
}
