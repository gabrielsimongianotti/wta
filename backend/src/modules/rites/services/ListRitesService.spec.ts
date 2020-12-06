import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeRitesRepository from '../repositories/fakes/FakeRitesRepository';
import CreateRitesService from './CreateRitesService';
import ListRitesService from './ListRitesService';

let fakeRitesRepository: FakeRitesRepository;
let fakeCacheProvider: FakeCacheProvider;
let createRites: CreateRitesService;
let listRites: ListRitesService;

describe('listRites', () => {
  beforeEach(() => {
    fakeRitesRepository = new FakeRitesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createRites = new CreateRitesService(
      fakeRitesRepository,
      fakeCacheProvider,
    );

    listRites = new ListRitesService(fakeRitesRepository, fakeCacheProvider);
  });

  it('should be able to list a fetiches', async () => {
    const rite = await createRites.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    const list = await listRites.execute();

    await expect(list).toEqual([rite]);
  });
  it('should be able to list of cache', async () => {
    const rite = await createRites.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await listRites.execute();

    const list = await listRites.execute();

    await expect(list).toEqual([rite]);
  });
});
