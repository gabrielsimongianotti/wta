import { inject, injectable } from 'tsyringe';

import IGifts from '@modules/gifts/infra/typeorm/entities/Gifts';
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

  public async execute(): Promise<IGifts[]> {
    const gifts = await this.giftsRepositoty.findAllGifts();

    return gifts;
  }
}

export default CreateUserService;
