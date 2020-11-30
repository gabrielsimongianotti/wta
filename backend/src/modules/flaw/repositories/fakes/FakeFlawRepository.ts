import { uuid } from 'uuidv4';

import IFlawRepository from '@modules/flaw/repositories/IFlawRepository';
import Flaw from '@modules/flaw/infra/typeorm/entities/Flaw';
import ICreateFlawDTOS from '@modules/flaw/dtos/ICreateFlawDTOS';

class FakeFlawRepository implements IFlawRepository {
  private flaws: Flaw[] = [];

  public async create({
    bonus,
    name,
    description,
    system,
    type,
  }: ICreateFlawDTOS): Promise<Flaw> {
    const flaws = new Flaw();

    Object.assign(flaws, {
      id: uuid(),
      bonus,
      name,
      description,
      system,
      type,
    });

    this.flaws.push(flaws);

    return flaws;
  }

  public async findByName(name: string): Promise<Flaw | undefined> {
    const findFlaws = this.flaws.find(flaw => flaw.name === name);

    return findFlaws;
  }

  public async findAllFlaws(): Promise<Flaw[]> {
    return this.flaws;
  }
}

export default FakeFlawRepository;
