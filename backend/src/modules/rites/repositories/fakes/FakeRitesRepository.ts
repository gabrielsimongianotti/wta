import { uuid } from 'uuidv4';

import IRitesRepositoty from '@modules/rites/repositories/IRitesRepositoty';
import ICreateRitesDTO from '@modules/rites/dtos/ICreateRitesDTO';
import Rites from '@modules/rites/infra/typeorm/entities/Rites';

class FakeRitesRepository implements IRitesRepositoty {
  private rites: Rites[] = [];

  public async create({
    system,
    description,
    level,
    name,
  }: ICreateRitesDTO): Promise<Rites> {
    const rite = new Rites();

    Object.assign(rite, {
      id: uuid(),
      system,
      description,
      level,
      name,
    });

    this.rites.push(rite);

    return rite;
  }

  public async findByName(name: string): Promise<Rites | undefined> {
    const findRite = this.rites.find(rite => rite.name === name);

    return findRite;
  }

  public async findAllRites(): Promise<Rites[]> {
    return this.rites;
  }
}

export default FakeRitesRepository;
