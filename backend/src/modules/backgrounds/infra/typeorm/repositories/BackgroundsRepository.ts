import { getRepository, Repository } from 'typeorm';

import IBackgroundsRepositoty from '@modules/backgrounds/repositories/IBackgroundsRepository';
import ICreateBackgroundsDTO from '@modules/backgrounds/dtos/ICreateBackgroundsDTO';
import Backgrounds from '@modules/backgrounds/infra/typeorm/entities/Backgrounds';

class BackgroundsRepository implements IBackgroundsRepositoty {
  private ormRepository: Repository<Backgrounds>;

  constructor() {
    this.ormRepository = getRepository(Backgrounds);
  }

  public async create({
    description,
    level,
    name,
  }: ICreateBackgroundsDTO): Promise<Backgrounds> {
    const background = await this.ormRepository.create({
      description,
      level,
      name,
    });

    await this.ormRepository.save(background);

    return background;
  }

  public async findByName(name: string): Promise<Backgrounds | undefined> {
    const background = await this.ormRepository.findOne({
      where: { name },
    });

    return background;
  }

  public async findAllBackgrounds(): Promise<Backgrounds[]> {
    const backgrounds = await this.ormRepository.find();

    return backgrounds;
  }
}

export default BackgroundsRepository;
