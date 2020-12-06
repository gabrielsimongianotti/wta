import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeFetichesRepository from '../repositories/fakes/FakeFetichesRepository';
import CreateFeticheService from './CreateFeticheService';

let fakeFetichesRepository: FakeFetichesRepository;
let fakeCacheProvider: FakeCacheProvider;
let createFetiche: CreateFeticheService;

describe('CreateFetiche', () => {
  beforeEach(() => {
    fakeFetichesRepository = new FakeFetichesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createFetiche = new CreateFeticheService(
      fakeFetichesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new fetiche', async () => {
    const fetiche = await createFetiche.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    expect(fetiche).toHaveProperty('id');
  });

  it('should not be able to create a new fetiche with same name from another', async () => {
    await createFetiche.execute({
      name: 'John Doe',
      description: 'g',
      level: 1,
      system: 'h',
    });

    await expect(
      createFetiche.execute({
        name: 'John Doe',
        description: 'g',
        level: 1,
        system: 'h',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
