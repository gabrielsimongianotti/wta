import Rites from '../infra/typeorm/entities/Rites';
import ICreateRitesDTO from '../dtos/ICreateRitesDTO';

export default interface IRitesRepositoty {
  create(date: ICreateRitesDTO): Promise<Rites>;
  findByName(name: string): Promise<Rites | undefined>;
  findAllRites(): Promise<Rites[]>;
}
