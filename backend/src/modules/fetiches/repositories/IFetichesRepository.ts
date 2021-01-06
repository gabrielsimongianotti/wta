import Fetiches from '../infra/typeorm/entities/Fetiches';
import ICreateFetichesDTO from '../dtos/ICreateFetichesDTO';

export default interface IFetichesRepositoty {
  create(date: ICreateFetichesDTO): Promise<Fetiches>;
  findByName(name: string): Promise<Fetiches | undefined>;
  findAllFetiches(): Promise<Fetiches[]>;
}
