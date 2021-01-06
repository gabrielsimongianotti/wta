import { inject, injectable } from 'tsyringe';

import IMerit from '@modules/merit/infra/typeorm/entities/Merit';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IMeritRepository from '../repositories/IMeritRepository';

@injectable()
class ListMeritsService {
  constructor(
    @inject('MeritRepository')
    private meritRepository: IMeritRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IMerit[]> {
    let merits = await this.cacheProvider.recover<IMerit[]>(`merits-list:`);

    if (!merits) {
      merits = await this.meritRepository.findAllMerits();

      await this.cacheProvider.save(`merits-list:`, merits);
    }

    return merits;
  }
}

export default ListMeritsService;
