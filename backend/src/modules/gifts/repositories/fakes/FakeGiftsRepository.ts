import IGiftsRepositoty from '@modules/gifts/repositories/IGiftsRepositoty';
import ICreateGiftsDTO from '@modules/gifts/dtos/ICreateGiftsDTO';
import Gifts from '@modules/gifts/infra/typeorm/entities/Gifts';
import { uuid } from 'uuidv4';

class FakeGiftsRepository implements IGiftsRepositoty {
  private gifts: Gifts[] = [];

  public async findById(id: string): Promise<Gifts | undefined> {
    throw new Error(`Method not implemented.${id}`);
  }

  public async findAllGifts(): Promise<Gifts[]> {
    throw new Error('Method not implemented.');
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
