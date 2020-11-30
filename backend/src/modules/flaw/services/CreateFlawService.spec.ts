import AppError from '@shared/erros/AppError';

import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeFlawRepository from '../repositories/fakes/FakeFlawRepository';
import CreateFlawService from './CreateFlawService';

let fakeFlawRepository: FakeFlawRepository;
let fakeCacheProvider: FakeCacheProvider;
let createFlaw: CreateFlawService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeFlawRepository = new FakeFlawRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createFlaw = new CreateFlawService(fakeFlawRepository, fakeCacheProvider);
  });

  it('should be able to create a new flaw', async () => {
    const flaw = await createFlaw.execute({
      name: 'John Doe',
      description: 'g',
      bonus: 1,
      type: 'supernatural',
      system: 'h',
    });

    expect(flaw).toHaveProperty('id');
  });

  it('should not be able to create a new flaw with same name from another', async () => {
    await createFlaw.execute({
      name: 'John Doe',
      description: 'g',
      bonus: 1,
      type: 'supernatural',
      system: 'h',
    });

    await expect(
      createFlaw.execute({
        name: 'John Doe',
        description: 'g',
        bonus: 1,
        type: 'supernatural',
        system: 'h',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
