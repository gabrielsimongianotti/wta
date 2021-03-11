import AppError from '@shared/erros/AppError';
import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import CreateGroupService from './CreateGroupService';
import RemoveGroupService from './RemoveGroupService';

let fakeGroupRepository: FakeGroupRepository;
let fakeCacheProvider: FakeCacheProvider;
let createGroupService: CreateGroupService;
let removeGroupService: RemoveGroupService;

describe('RemoveGroupService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createGroupService = new CreateGroupService(
      fakeGroupRepository,
      fakeCacheProvider,
    );
    removeGroupService = new RemoveGroupService(
      fakeGroupRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to remove group', async () => {
    const deleteFile = jest.spyOn(removeGroupService, 'execute');
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

    await removeGroupService.execute(id);

    expect(deleteFile).toHaveBeenCalledWith(id);
  });
  it('should not be able to remove group', async () => {
    await expect(removeGroupService.execute('user id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
