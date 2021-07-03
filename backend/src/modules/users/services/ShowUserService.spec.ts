import AppError from '@shared/erros/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';

import ShowUserService from './ShowUserService';

let fakeUserRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let showUser: ShowUserService;

describe('ShowUserService', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    showUser = new ShowUserService(
      fakeUserRepository,
      fakeCacheProvider,
    );
  });

  it('should be able search user by incomplete name', async () => {
    const user = await fakeUserRepository.create({
      name: 'gatao',
      email: 'gatao@gmail.com',
      password: '1234567',
    });

    const search = await showUser.execute({
      name: user.name,
    });

    expect(search[0].name).toBe('gatao');
  });

  it('should not be able search user by incomplete name', async () => {
    await expect(
      showUser.execute({
        name: 'gatao',
      }),
    ).rejects.toBeInstanceOf(AppError);
});
});
