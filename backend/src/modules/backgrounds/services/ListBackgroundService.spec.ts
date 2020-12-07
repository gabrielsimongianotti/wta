import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeBackgroundsRepository from '../repositories/fakes/FakeBackgroundsRepository';
import CreateBackgroundsService from './CreateBackgroundsService';
import ListBackgroundsService from './ListBackgroundsService';

let fakeBackgroundsRepository: FakeBackgroundsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createBackgrounds: CreateBackgroundsService;
let listBackgrounds: ListBackgroundsService;

describe('listBackgrounds', () => {
  beforeEach(() => {
    fakeBackgroundsRepository = new FakeBackgroundsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createBackgrounds = new CreateBackgroundsService(
      fakeBackgroundsRepository,
      fakeCacheProvider,
    );

    listBackgrounds = new ListBackgroundsService(
      fakeBackgroundsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list a Backgrounds', async () => {
    const background = await createBackgrounds.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
    });

    const list = await listBackgrounds.execute();

    await expect(list).toEqual([background]);
  });
  it('should be able to list of cache', async () => {
    const background = await createBackgrounds.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
    });

    await listBackgrounds.execute();

    const list = await listBackgrounds.execute();

    await expect(list).toEqual([background]);
  });
});
