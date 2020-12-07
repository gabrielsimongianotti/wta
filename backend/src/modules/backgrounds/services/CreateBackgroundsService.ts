import { inject, injectable } from 'tsyringe';

import IBackgrounds from '@modules/backgrounds/infra/typeorm/entities/Backgrounds';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IBackgroundsRepository from '../repositories/IBackgroundsRepository';

interface IRequestDTO {
  name: string;
  level: number;
  description: string;
}

@injectable()
class CreateBackgroundsService {
  constructor(
    @inject('BackgroundsRepository')
    private backgroundsRepositoty: IBackgroundsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    level,
    description,
  }: IRequestDTO): Promise<IBackgrounds> {
    const checkSameName = await this.backgroundsRepositoty.findByName(name);

    if (checkSameName) {
      throw new AppError('Este antecedente já esta cadastrado');
    }

    const background = await this.backgroundsRepositoty.create({
      name,
      level,
      description,
    });

    await this.cacheProvider.invalidatePrefix('rites-list:*');
    return background;
  }
}

export default CreateBackgroundsService;
