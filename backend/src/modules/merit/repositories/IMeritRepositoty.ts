import Merit from '../infra/typeorm/entities/Merit';
import ICreateMerits from '../dtos/ICreateMeritDTO';

export default interface IMeritRepositoty {
  create(date: ICreateMerits): Promise<Merit>;
  findByName(name: string): Promise<Merit | undefined>;
  findAllMerits(): Promise<Merit[]>;
}
