import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeFetichesRepository from '../repositories/fakes/FakeFetichesRepository';
import CreateFeticheService from './CreateFeticheService';
import ListFetichesService from './ListFetichesService';

let fakeFetichesRepository: FakeFetichesRepository;
let fakeCacheProvider: FakeCacheProvider;
let createFetiche: CreateFeticheService;
let listFetiches: ListFetichesService;

describe('listFetiches', () => {
  beforeEach(() => {
    fakeFetichesRepository = new FakeFetichesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createFetiche = new CreateFeticheService(
      fakeFetichesRepository,
      fakeCacheProvider,
    );

    listFetiches = new ListFetichesService(
      fakeFetichesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list a fetiches', async () => {
    const fetiche = await createFetiche.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    const list = await listFetiches.execute();

    await expect(list).toEqual([fetiche]);
  });
  it('should be able to list of cache', async () => {
    const fetiche = await createFetiche.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await listFetiches.execute();

    const list = await listFetiches.execute();

    await expect(list).toEqual([fetiche]);
  });
});
