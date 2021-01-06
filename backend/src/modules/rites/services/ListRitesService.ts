import { inject, injectable } from 'tsyringe';

import IRites from '@modules/rites/infra/typeorm/entities/Rites';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IRitesRepository from '../repositories/IRitesRepository';

@injectable()
class ListRitesService {
  constructor(
    @inject('RitesRepository')
    private ritesRepository: IRitesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IRites[]> {
    let rites = await this.cacheProvider.recover<IRites[]>(`rites-list:`);

    if (!rites) {
      rites = await this.ritesRepository.findAllRites();

      await this.cacheProvider.save(`rites-list:`, rites);
    }

    return rites;
  }
}

export default ListRitesService;
