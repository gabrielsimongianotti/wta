import Gifts from '../infra/typeorm/entities/Gifts';
import ICreateGifts from '../dtos/ICreateGiftsDTO';

export default interface IGiftsRepositoty {
  create(date: ICreateGifts): Promise<Gifts>;
  findByName(name: string): Promise<Gifts | undefined>;
  findAllGifts(): Promise<Gifts[]>;
}
