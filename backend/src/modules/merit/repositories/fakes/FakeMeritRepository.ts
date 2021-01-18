import IMeritRepositoty from '@modules/merit/repositories/IMeritRepository';
import ICreateMeritDTO from '@modules/merit/dtos/ICreateMeritDTO';
import Merit from '@modules/merit/infra/typeorm/entities/Merit';
import { uuid } from 'uuidv4';

class FakeMeritRepository implements IMeritRepositoty {
  private merits: Merit[] = [];

  public async findAllMerits(): Promise<Merit[]> {
    return this.merits;
  }

  public async findByName(name: string): Promise<Merit | undefined> {
    const findMerit = this.merits.find(merit => merit.name === name);

    return findMerit;
  }

  public async create({
    name,
    type,
    cost,
    description,
    system,
  }: ICreateMeritDTO): Promise<Merit> {
    const merit = new Merit();

    Object.assign(merit, {
      id: uuid(),
      name,
      type,
      cost,
      description,
      system,
    });

    this.merits.push(merit);

    return merit;
  }
}

export default FakeMeritRepository;
