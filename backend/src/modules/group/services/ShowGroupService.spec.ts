import AppError from '@shared/erros/AppError';
// import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import ShowGroupService from './ShowGroupService';

let fakeGroupRepository: FakeGroupRepository;
// let fakeCacheProvider: FakeCacheProvider;
let showGroupService: ShowGroupService;

describe('ShowGroupService', () => {
  beforeEach(() => {
    // fakeCacheProvider = new FakeCacheProvider();
    fakeGroupRepository = new FakeGroupRepository();
    showGroupService = new ShowGroupService(fakeGroupRepository);
  });

  it('should be able to list the group', async () => {
    const fistGroup = await fakeGroupRepository.create({
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
      user_master_id: 'user_id',
    });

    await fakeGroupRepository.create({
      name: 'teste',
      weekday: 'Segunda',
      initialHours: '08:00:00',
      endHours: '12:00:00',
      user_first_id: 'userd',
      user_secund_id: '',
      user_third_id: '',
      user_fourth_id: '',
      user_fifth_id: '',
      user_sixth_id: '',
      user_seventh_id: '',
      user_master_id: 'user',
    });

    const secundGroup = await fakeGroupRepository.create({
      name: 'teste',
      weekday: 'Segunda',
      initialHours: '08:00:00',
      endHours: '12:00:00',
      user_first_id: 'user_id',
      user_secund_id: '',
      user_third_id: '',
      user_fourth_id: '',
      user_fifth_id: '',
      user_sixth_id: '',
      user_seventh_id: '',
      user_master_id: 'user',
    });

    const groups = await showGroupService.execute('user_id');

    expect(groups).toEqual([fistGroup, secundGroup]);
  });
  it('should not be able to list the group', async () => {
    await expect(showGroupService.execute('user_id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
