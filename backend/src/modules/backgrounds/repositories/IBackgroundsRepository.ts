import Backgrounds from '../infra/typeorm/entities/Backgrounds';
import ICreateBackgroundsDTO from '../dtos/ICreateBackgroundsDTO';

export default interface IBackgroundsRepository {
  create(date: ICreateBackgroundsDTO): Promise<Backgrounds>;
  findByName(name: string): Promise<Backgrounds | undefined>;
  findAllBackgrounds(): Promise<Backgrounds[]>;
}
