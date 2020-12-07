import { inject, injectable } from 'tsyringe';

import IBackgrounds from '@modules/backgrounds/infra/typeorm/entities/Backgrounds';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IBackgroundsRepository from '../repositories/IBackgroundsRepository';

@injectable()
class ListBackgroundsService {
  constructor(
    @inject('BackgroundsRepository')
    private backgroundsRepositoty: IBackgroundsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IBackgrounds[]> {
    let backgrounds = await this.cacheProvider.recover<IBackgrounds[]>(
      `backgrounds-list:`,
    );

    if (!backgrounds) {
      backgrounds = await this.backgroundsRepositoty.findAllBackgrounds();

      await this.cacheProvider.save(`backgrounds-list:`, backgrounds);
    }

    return backgrounds;
  }
}

export default ListBackgroundsService;
