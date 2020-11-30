import { getRepository, Repository } from 'typeorm';

import IFlawRepositoty from '@modules/flaw/repositories/IFlawRepository';
import Flaw from '@modules/flaw/infra/typeorm/entities/Flaw';
import ICreateFlawDTOS from '@modules/flaw/dtos/ICreateFlawDTOS';

class FlawRepository implements IFlawRepositoty {
  private ormRepository: Repository<Flaw>;

  constructor() {
    this.ormRepository = getRepository(Flaw);
  }

  public async findAllFlaws(): Promise<Flaw[]> {
    const flaws = await this.ormRepository.find();

    return flaws;
  }

  public async create({
    bonus,
    description,
    system,
    name,
    type,
  }: ICreateFlawDTOS): Promise<Flaw> {
    const flaw = await this.ormRepository.create({
      bonus,
      description,
      system,
      name,
      type,
    });

    await this.ormRepository.save(flaw);

    return flaw;
  }

  public async findByName(name: string): Promise<Flaw | undefined> {
    const flaw = await this.ormRepository.findOne({
      where: { name },
    });

    return flaw;
  }
}

export default FlawRepository;
