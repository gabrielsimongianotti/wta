import { getRepository, Repository } from 'typeorm';

import IMeritRepositoty from '@modules/merit/repositories/IMeritRepository';
import ICreateMeritDTO from '@modules/merit/dtos/ICreateMeritDTO';
import Merit from '@modules/merit/infra/typeorm/entities/Merit';

class MeritRepository implements IMeritRepositoty {
  private ormRepository: Repository<Merit>;

  constructor() {
    this.ormRepository = getRepository(Merit);
  }

  public async create({
    description,
    name,
    cost,
    system,
    type,
  }: ICreateMeritDTO): Promise<Merit> {
    const merit = this.ormRepository.create({
      description,
      name,
      cost,
      system,
      type,
    });

    await this.ormRepository.save(merit);

    return merit;
  }

  public async findByName(name: string): Promise<Merit | undefined> {
    const merit = this.ormRepository.findOne({
      where: { name },
    });

    return merit;
  }

  public async findAllMerits(): Promise<Merit[]> {
    const merit = this.ormRepository.find();

    return merit;
  }
}

export default MeritRepository;
