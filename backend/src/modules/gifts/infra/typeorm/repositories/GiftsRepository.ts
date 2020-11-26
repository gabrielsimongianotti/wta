import { getRepository, Repository } from 'typeorm';

import IGiftsRepository from '@modules/gifts/repositories/IGiftsRepositoty';
import ICreateGiftsDTO from '@modules/gifts/dtos/ICreateGiftsDTO';

import Gifts from '@modules/gifts/infra/typeorm/entities/Gifts';

class GiftsRepository implements IGiftsRepository {
  private ormRepository: Repository<Gifts>;

  constructor() {
    this.ormRepository = getRepository(Gifts);
  }

  public async findByName(name: string): Promise<Gifts | undefined> {
    const gift = await this.ormRepository.findOne({
      where: { name },
    });

    return gift;
  }

  public async create({
    description,
    level,
    name,
    system,
  }: ICreateGiftsDTO): Promise<Gifts> {
    const gifts = await this.ormRepository.create({
      description,
      level,
      name,
      system,
    });

    await this.ormRepository.save(gifts);

    return gifts;
  }

  public async findById(id: string): Promise<Gifts | undefined> {
    const gifts = await this.ormRepository.findOne({ where: { id } });

    return gifts;
  }

  public async findAllGifts(): Promise<Gifts[]> {
    const gifts = await this.ormRepository.find();

    return gifts;
  }
}

export default GiftsRepository;
