import { uuid } from 'uuidv4';

import IFetichesRepositoty from '@modules/fetiches/repositories/IFetichesRepositoty';
import ICreateFetichesDTO from '@modules/fetiches/dtos/ICreateFetichesDTO';
import Fetiches from '@modules/fetiches/infra/typeorm/entities/Fetiches';

class FakeFetichesRepository implements IFetichesRepositoty {
  private fetiches: Fetiches[] = [];

  public async create({
    system,
    description,
    level,
    name,
  }: ICreateFetichesDTO): Promise<Fetiches> {
    const fetiche = new Fetiches();

    Object.assign(fetiche, {
      id: uuid(),
      system,
      description,
      level,
      name,
    });

    this.fetiches.push(fetiche);

    return fetiche;
  }

  public async findByName(name: string): Promise<Fetiches | undefined> {
    const findFetiches = this.fetiches.find(fetiche => fetiche.name === name);

    return findFetiches;
  }

  public async findAllFetiches(): Promise<Fetiches[]> {
    return this.fetiches;
  }
}

export default FakeFetichesRepository;
