import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeBackgroundsRepository from '../repositories/fakes/FakeBackgroundsRepository';
import CreateBackgroundsService from './CreateBackgroundsService';

let fakeBackgroundsRepository: FakeBackgroundsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createBackgrounds: CreateBackgroundsService;

describe('CreateBackgrounds', () => {
  beforeEach(() => {
    fakeBackgroundsRepository = new FakeBackgroundsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createBackgrounds = new CreateBackgroundsService(
      fakeBackgroundsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new background', async () => {
    const background = await createBackgrounds.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
    });

    expect(background).toHaveProperty('id');
  });

  it('should not be able to create a new background with same name from another', async () => {
    await createBackgrounds.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
    });

    await expect(
      createBackgrounds.execute({
        name: 'John Doe',
        description: 'g',
        level: 1,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
