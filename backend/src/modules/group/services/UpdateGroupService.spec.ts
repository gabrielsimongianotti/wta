import AppError from '@shared/erros/AppError';
import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import CreateGroupService from './CreateGroupService';
import UpdateGroupService from './UpdateGroupService';

let fakeGroupRepository: FakeGroupRepository;
let fakeCacheProvider: FakeCacheProvider;
let createGroupService: CreateGroupService;
let updateGroupService: UpdateGroupService;

describe('UpdateGroupService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createGroupService = new CreateGroupService(
      fakeGroupRepository,
      fakeCacheProvider,
    );

    updateGroupService = new UpdateGroupService(fakeGroupRepository);
  });

  it('should be able to edit group', async () => {
    const { id } = await createGroupService.execute({
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

    const upgrade = await updateGroupService.execute({
      id,
      name: 'new name',
      weekday: 'Sabado',
      initialHours: '08:30:00',
      endHours: '19:00:00',
      user_first_id: 'user_first_id',
      user_secund_id: 'user_secund_id',
      user_third_id: 'user_third_id',
      user_fourth_id: 'user_fourth_id',
      user_fifth_id: 'user_fifth_id',
      user_sixth_id: 'user_sixth_id',
      user_seventh_id: 'user_seventh_id',
      user_master_id: 'user id',
    });

    expect(upgrade).toHaveProperty('id');
  });

  it('should not be able to edit group on the day and hour it in not available', async () => {
    const { id } = await createGroupService.execute({
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

    await createGroupService.execute({
      name: 'teste',
      weekday: 'Sabado',
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
      updateGroupService.execute({
        id,
        name: 'new name',
        weekday: 'Sabado',
        initialHours: '08:30:00',
        endHours: '19:00:00',
        user_first_id: 'user_first_id',
        user_secund_id: 'user_secund_id',
        user_third_id: 'user_third_id',
        user_fourth_id: 'user_fourth_id',
        user_fifth_id: 'user_fifth_id',
        user_sixth_id: 'user_sixth_id',
        user_seventh_id: 'user_seventh_id',
        user_master_id: 'user id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to edit group with initial hours bigger end hours', async () => {
    const { id } = await createGroupService.execute({
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

    await expect(
      updateGroupService.execute({
        id,
        name: 'new name',
        weekday: 'Sabado',
        initialHours: '18:30:00',
        endHours: '09:00:00',
        user_first_id: 'user_first_id',
        user_secund_id: 'user_secund_id',
        user_third_id: 'user_third_id',
        user_fourth_id: 'user_fourth_id',
        user_fifth_id: 'user_fifth_id',
        user_sixth_id: 'user_sixth_id',
        user_seventh_id: 'user_seventh_id',
        user_master_id: 'user id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
