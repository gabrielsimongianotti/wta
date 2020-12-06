import { getRepository, Repository } from 'typeorm';

import IFetichesRepositoty from '@modules/fetiches/repositories/IFetichesRepositoty';
import ICreateFetichesDTO from '@modules/fetiches/dtos/ICreateFetichesDTO';
import Fetiches from '@modules/fetiches/infra/typeorm/entities/Fetiches';

class FetichesRepository implements IFetichesRepositoty {
  private ormRepository: Repository<Fetiches>;

  constructor() {
    this.ormRepository = getRepository(Fetiches);
  }

  public async create({
    description,
    level,
    name,
    system,
  }: ICreateFetichesDTO): Promise<Fetiches> {
    const fetiche = await this.ormRepository.create({
      description,
      level,
      name,
      system,
    });

    await this.ormRepository.save(fetiche);

    return fetiche;
  }

  public async findByName(name: string): Promise<Fetiches | undefined> {
    const fetiche = await this.ormRepository.findOne({
      where: { name },
    });

    return fetiche;
  }

  public async findAllFetiches(): Promise<Fetiches[]> {
    const fetiches = await this.ormRepository.find();

    return fetiches;
  }
}

export default FetichesRepository;
