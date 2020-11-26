import { inject, injectable } from 'tsyringe';

import IGifts from '@modules/gifts/infra/typeorm/entities/Gifts';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IGiftsRepositoty from '../repositories/IGiftsRepositoty';

interface IRequestDTO {
  name: string;
  level: number;
  description: string;
  system: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('GiftsRepositoty')
    private giftsRepositoty: IGiftsRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    level,
    description,
    system,
  }: IRequestDTO): Promise<IGifts> {
    const checkSameEmail = await this.giftsRepositoty.findByName(name);

    if (checkSameEmail) {
      throw new AppError('Este fetiche ja esta cadastrado');
    }

    const gifts = await this.giftsRepositoty.create({
      name,
      level,
      description,
      system,
    });

    await this.cacheProvider.invalidatePrefix('providers-list:*');

    return gifts;
  }
}

export default CreateUserService;
