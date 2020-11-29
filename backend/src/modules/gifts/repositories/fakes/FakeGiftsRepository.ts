import IGiftsRepository from '@modules/gifts/repositories/IGiftsRepository';
import ICreateGiftsDTO from '@modules/gifts/dtos/ICreateGiftsDTO';
import Gifts from '@modules/gifts/infra/typeorm/entities/Gifts';
import { uuid } from 'uuidv4';

class FakeGiftsRepository implements IGiftsRepository {
  private gifts: Gifts[] = [];

  public async findAllGifts(): Promise<Gifts[]> {
    return this.gifts;
  }

  public async findByName(name: string): Promise<Gifts | undefined> {
    const findGifts = this.gifts.find(gift => gift.name === name);

    return findGifts;
  }

  public async create({
    name,
    level,
    description,
    system,
  }: ICreateGiftsDTO): Promise<Gifts> {
    const gifts = new Gifts();

    Object.assign(gifts, { id: uuid(), name, level, description, system });

    this.gifts.push(gifts);

    return gifts;
  }
}

export default FakeGiftsRepository;
