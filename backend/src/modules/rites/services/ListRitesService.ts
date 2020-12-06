import { inject, injectable } from 'tsyringe';

import IRites from '@modules/rites/infra/typeorm/entities/Rites';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IRitesRepositoty from '../repositories/IRitesRepositoty';

@injectable()
class ListRitesService {
  constructor(
    @inject('RitesRepositoty')
    private ritesRepositoty: IRitesRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IRites[]> {
    let rites = await this.cacheProvider.recover<IRites[]>(`rites-list:`);

    if (!rites) {
      rites = await this.ritesRepositoty.findAllRites();

      await this.cacheProvider.save(`rites-list:`, rites);
    }

    return rites;
  }
}

export default ListRitesService;
