import AppError from '@shared/erros/AppError';
import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import CreateGroupService from './CreateGroupService';

let fakeGroupRepository: FakeGroupRepository;
let fakeCacheProvider: FakeCacheProvider;
let createGroupService: CreateGroupService;

describe('CreateGroupService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createGroupService = new CreateGroupService(
      fakeGroupRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new group', async () => {
    const group = await createGroupService.execute({
      name: 'teste',
      weekday: 'Segunda',
      initialHours: '08:00:00',
      endHours: '12:00:00',
      user_first_id: '',
      user_secund_id: '',
      user_third_id: '',
      user_fourth_id: '',
      user_fifth_id: '',
      user_sixth_id: '',
      user_seventh_id: '',
      user_master_id: 'user id',
    });

    expect(group).toHaveProperty('id');
  });

  it('should not be able to create a new group with initial hours bigger end hours', async () => {
    await expect(
      createGroupService.execute({
        name: 'teste',
        weekday: 'Segunda',
        initialHours: '18:00:00',
        endHours: '12:00:00',
        user_first_id: '',
        user_secund_id: '',
        user_third_id: '',
        user_fourth_id: '',
        user_fifth_id: '',
        user_sixth_id: '',
        user_seventh_id: '',
        user_master_id: 'user id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be abre to create a new group on the day and hour it in not available', async () => {
    await createGroupService.execute({
      name: 'oneTest',
      weekday: 'Segunda',
      initialHours: '08:00:00',
      endHours: '12:00:00',
      user_first_id: '',
      user_secund_id: '',
      user_third_id: '',
      user_fourth_id: '',
      user_fifth_id: '',
      user_sixth_id: '',
      user_seventh_id: '',
      user_master_id: 'user id',
    });

    await createGroupService.execute({
      name: 'threeTest',
      weekday: 'Terça',
      initialHours: '08:00:00',
      endHours: '12:00:00',
      user_first_id: '',
      user_secund_id: '',
      user_third_id: '',
      user_fourth_id: '',
      user_fifth_id: '',
      user_sixth_id: '',
      user_seventh_id: '',
      user_master_id: 'user id',
    });

    await expect(
      createGroupService.execute({
        name: 'twoTeste',
        weekday: 'Segunda',
        initialHours: '08:00:00',
        endHours: '12:00:00',
        user_first_id: '',
        user_secund_id: '',
        user_third_id: '',
        user_fourth_id: '',
        user_fifth_id: '',
        user_sixth_id: '',
        user_seventh_id: '',
        user_master_id: 'user id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
