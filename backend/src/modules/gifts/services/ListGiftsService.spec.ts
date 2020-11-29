import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGiftsRepository from '../repositories/fakes/FakeGiftsRepository';
import CreateGiftsService from './CreateGiftsService';
import ListGiftsService from './ListGiftsService';

let fakeGiftsRepository: FakeGiftsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createGifts: CreateGiftsService;
let listGifts: ListGiftsService;

describe('listGifts', () => {
  beforeEach(() => {
    fakeGiftsRepository = new FakeGiftsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createGifts = new CreateGiftsService(
      fakeGiftsRepository,
      fakeCacheProvider,
    );

    listGifts = new ListGiftsService(fakeGiftsRepository, fakeCacheProvider);
  });

  it('should be able to list a gifts', async () => {
    const gift = await createGifts.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    const list = await listGifts.execute();

    await expect(list).toEqual([gift]);
  });
  it('should be able to list of cache', async () => {
    const gift = await createGifts.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await listGifts.execute();

    const list = await listGifts.execute();

    await expect(list).toEqual([gift]);
  });
});
