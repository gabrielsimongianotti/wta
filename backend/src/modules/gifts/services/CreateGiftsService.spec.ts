import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGiftsRepository from '../repositories/fakes/FakeGiftsRepository';
import CreateGiftsService from './CreateGiftsService';

let fakeGiftsRepository: FakeGiftsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createGifts: CreateGiftsService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeGiftsRepository = new FakeGiftsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createGifts = new CreateGiftsService(
      fakeGiftsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new gift', async () => {
    const gift = await createGifts.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    expect(gift).toHaveProperty('id');
  });

  it('should not be able to create a new gift with same name from another', async () => {
    await createGifts.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await expect(
      createGifts.execute({
        name: 'John Doe',
        description: 'g',
        level: 1,
        system: 'h',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
