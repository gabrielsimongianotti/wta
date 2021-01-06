import { getRepository, Repository } from 'typeorm';

import IRitesRepository from '@modules/rites/repositories/IRitesRepository';
import ICreateRitesDTO from '@modules/rites/dtos/ICreateRitesDTO';
import Rites from '@modules/rites/infra/typeorm/entities/Rites';

class RitesRepository implements IRitesRepository {
  private ormRepository: Repository<Rites>;

  constructor() {
    this.ormRepository = getRepository(Rites);
  }

  public async create({
    description,
    level,
    name,
    system,
  }: ICreateRitesDTO): Promise<Rites> {
    const rite = await this.ormRepository.create({
      description,
      level,
      name,
      system,
    });

    await this.ormRepository.save(rite);

    return rite;
  }

  public async findByName(name: string): Promise<Rites | undefined> {
    const rite = await this.ormRepository.findOne({
      where: { name },
    });

    return rite;
  }

  public async findAllRites(): Promise<Rites[]> {
    const rite = await this.ormRepository.find();

    return rite;
  }
}

export default RitesRepository;
