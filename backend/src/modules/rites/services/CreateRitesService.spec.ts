import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeRitesRepository from '../repositories/fakes/FakeRitesRepository';
import CreateRitesService from './CreateRitesService';

let fakeRitesRepository: FakeRitesRepository;
let fakeCacheProvider: FakeCacheProvider;
let createRites: CreateRitesService;

describe('CreateRite', () => {
  beforeEach(() => {
    fakeRitesRepository = new FakeRitesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createRites = new CreateRitesService(
      fakeRitesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new rite', async () => {
    const rite = await createRites.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    expect(rite).toHaveProperty('id');
  });

  it('should not be able to create a new rite with same name from another', async () => {
    await createRites.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await expect(
      createRites.execute({
        name: 'John Doe',
        description: 'g',
        level: 1,
        system: 'h',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
