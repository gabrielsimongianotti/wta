import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeFlawRepository from '../repositories/fakes/FakeFlawRepository';
import CreateFlawService from './CreateFlawService';
import ListFlawService from './ListFlawService';

let fakeFlawRepository: FakeFlawRepository;
let fakeCacheProvider: FakeCacheProvider;
let createFlaw: CreateFlawService;
let listFlaw: ListFlawService;

describe('listUser', () => {
  beforeEach(() => {
    fakeFlawRepository = new FakeFlawRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createFlaw = new CreateFlawService(fakeFlawRepository, fakeCacheProvider);

    listFlaw = new ListFlawService(fakeFlawRepository, fakeCacheProvider);
  });

  it('should be able to list a gifts', async () => {
    const gift = await createFlaw.execute({
      name: 'John Doe',
      description: 'g',
      bonus: 1,
      type: 'supernatural',
      system: 'h',
    });

    const list = await listFlaw.execute();

    await expect(list).toEqual([gift]);
  });

  it('should be able to list of cache', async () => {
    const gift = await createFlaw.execute({
      name: 'John Doe',
      description: 'g',
      bonus: 1,
      type: 'supernatural',
      system: 'h',
    });

    await listFlaw.execute();

    const list = await listFlaw.execute();

    await expect(list).toEqual([gift]);
  });
});
