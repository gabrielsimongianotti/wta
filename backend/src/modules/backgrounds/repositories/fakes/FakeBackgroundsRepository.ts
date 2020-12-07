import { uuid } from 'uuidv4';

import IBackgroundsRepositoty from '@modules/backgrounds/repositories/IBackgroundsRepository';
import ICreateBackgroundsDTO from '@modules/backgrounds/dtos/ICreateBackgroundsDTO';
import Backgrounds from '@modules/backgrounds/infra/typeorm/entities/Backgrounds';

class FakeBackgroundsRepository implements IBackgroundsRepositoty {
  private backgrounds: Backgrounds[] = [];

  public async create({
    description,
    level,
    name,
  }: ICreateBackgroundsDTO): Promise<Backgrounds> {
    const background = new Backgrounds();

    Object.assign(background, {
      id: uuid(),
      description,
      level,
      name,
    });

    this.backgrounds.push(background);

    return background;
  }

  public async findByName(name: string): Promise<Backgrounds | undefined> {
    const findBackground = this.backgrounds.find(
      background => background.name === name,
    );

    return findBackground;
  }

  public async findAllBackgrounds(): Promise<Backgrounds[]> {
    return this.backgrounds;
  }
}

export default FakeBackgroundsRepository;
