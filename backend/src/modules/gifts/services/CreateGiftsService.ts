import { inject, injectable } from 'tsyringe';

import IGifts from '@modules/gifts/infra/typeorm/entities/Gifts';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IGiftsRepository from '../repositories/IGiftsRepository';

interface IRequestDTO {
  name: string;
  level: number;
  description: string;
  system: string;
}

@injectable()
class CreateGiftService {
  constructor(
    @inject('GiftsRepository')
    private giftsRepositoty: IGiftsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    level,
    description,
    system,
  }: IRequestDTO): Promise<IGifts> {
    const checkSameName = await this.giftsRepositoty.findByName(name);

    if (checkSameName) {
      throw new AppError('Este don já esta cadastrado');
    }

    const gifts = await this.giftsRepositoty.create({
      name,
      level,
      description,
      system,
    });

    await this.cacheProvider.invalidatePrefix('gifts-list');
    return gifts;
  }
}

export default CreateGiftService;
