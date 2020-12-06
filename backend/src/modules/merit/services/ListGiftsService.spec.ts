import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeMeritRepository from '../repositories/fakes/FakeMeritRepository';
import CreateMeritService from './CreateMeritService';
import ListMeritsService from './ListMeritsService';

let fakeMeritRepository: FakeMeritRepository;
let fakeCacheProvider: FakeCacheProvider;
let createMerit: CreateMeritService;
let listMerits: ListMeritsService;

describe('listMerits', () => {
  beforeEach(() => {
    fakeMeritRepository = new FakeMeritRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createMerit = new CreateMeritService(
      fakeMeritRepository,
      fakeCacheProvider,
    );

    listMerits = new ListMeritsService(fakeMeritRepository, fakeCacheProvider);
  });

  it('should be able to list a gifts', async () => {
    const gift = await createMerit.execute({
      name: 'John Doe',
      description: 'g',
      type: 'supernatural',
      cost: 1,
      system: 'h',
    });

    const list = await listMerits.execute();

    await expect(list).toEqual([gift]);
  });
  it('should be able to list of cache', async () => {
    const gift = await createMerit.execute({
      name: 'John Doe',
      description: 'g',
      type: 'supernatural',
      cost: 1,
      system: 'h',
    });

    await listMerits.execute();

    const list = await listMerits.execute();

    await expect(list).toEqual([gift]);
  });
});
