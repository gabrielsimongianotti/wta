import { inject, injectable } from 'tsyringe';

import IFetiches from '@modules/fetiches/infra/typeorm/entities/Fetiches';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IFetichesRepositoty from '../repositories/IFetichesRepositoty';

@injectable()
class ListFetichesService {
  constructor(
    @inject('FetichesRepository')
    private fetichesRepositoty: IFetichesRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<IFetiches[]> {
    let fetiches = await this.cacheProvider.recover<IFetiches[]>(
      `fetiches-list:`,
    );

    if (!fetiches) {
      fetiches = await this.fetichesRepositoty.findAllFetiches();

      await this.cacheProvider.save(`fetiches-list:`, fetiches);
    }

    return fetiches;
  }
}

export default ListFetichesService;
