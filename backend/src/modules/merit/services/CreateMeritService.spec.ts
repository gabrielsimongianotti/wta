import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeMeritRepository from '../repositories/fakes/FakeMeritRepository';
import CreateMeritService from './CreateMeritService';

let fakeMeritRepository: FakeMeritRepository;
let fakeCacheProvider: FakeCacheProvider;
let createMerit: CreateMeritService;

describe('CreateMerit', () => {
  beforeEach(() => {
    fakeMeritRepository = new FakeMeritRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createMerit = new CreateMeritService(
      fakeMeritRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new merit', async () => {
    const merit = await createMerit.execute({
      name: 'John Doe',
      description: 'g',
      type: 'supernatural',
      cost: 1,
      system: 'h',
    });

    expect(merit).toHaveProperty('id');
  });

  it('should not be able to create a new merit with same name from another', async () => {
    await createMerit.execute({
      name: 'John Doe',
      description: 'g',
      type: 'supernatural',
      cost: 1,
      system: 'h',
    });

    await expect(
      createMerit.execute({
        name: 'John Doe',
        description: 'g',
        type: 'supernatural',
        cost: 1,
        system: 'h',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
