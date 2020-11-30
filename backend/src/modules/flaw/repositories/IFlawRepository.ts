import Flaw from '../infra/typeorm/entities/Flaw';
import ICreateFlawDTOS from '../dtos/ICreateFlawDTOS';

export default interface IFlawRepository {
  create(date: ICreateFlawDTOS): Promise<Flaw>;
  findByName(name: string): Promise<Flaw | undefined>;
  findAllFlaws(): Promise<Flaw[]>;
}
