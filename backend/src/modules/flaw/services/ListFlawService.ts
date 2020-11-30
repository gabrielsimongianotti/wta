import { inject, injectable } from 'tsyringe';

import IFlaw from '@modules/flaw/infra/typeorm/entities/Flaw';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IFlawRepositoty from '../repositories/IFlawRepository';

@injectable()
class ListFlawsService {
  constructor(
    @inject('FlawRepository')
    private flawRepository: IFlawRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IFlaw[]> {
    let flaws = await this.cacheProvider.recover<IFlaw[]>(`flaws-list:`);

    if (!flaws) {
      flaws = await this.flawRepository.findAllFlaws();

      await this.cacheProvider.save(`flaws-list:`, flaws);
    }

    return flaws;
  }
}

export default ListFlawsService;
