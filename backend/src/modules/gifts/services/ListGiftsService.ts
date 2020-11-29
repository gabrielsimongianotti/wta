import { inject, injectable } from 'tsyringe';

import IGifts from '@modules/gifts/infra/typeorm/entities/Gifts';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IGiftsRepository from '../repositories/IGiftsRepository';

@injectable()
class ListGiftsService {
  constructor(
    @inject('GiftsRepository')
    private giftsRepository: IGiftsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IGifts[]> {
    let gifts = await this.cacheProvider.recover<IGifts[]>(`gifts-list:`);

    if (!gifts) {
      gifts = await this.giftsRepository.findAllGifts();

      await this.cacheProvider.save(`gifts-list:`, gifts);
    }

    return gifts;
  }
}

export default ListGiftsService;
