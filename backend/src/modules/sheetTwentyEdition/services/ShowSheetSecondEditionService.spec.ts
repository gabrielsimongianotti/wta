import AppError from '@shared/erros/AppError';


import FakeSheetTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';
import ShowSheetTwentyEditionService from './ShowSheetTwentyEditionService';

let fakeSheetTwentyEditionRepository: FakeSheetTwentyEditionRepository;
let createSheetTwentyEditionService: CreateSheetTwentyEditionService;
let showSheetTwentyEditionService: ShowSheetTwentyEditionService;

describe('ShowSheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetTwentyEditionRepository = new FakeSheetTwentyEditionRepository();

    createSheetTwentyEditionService = new CreateSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );

    showSheetTwentyEditionService = new ShowSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    )
  });

  it('should be able to show a sheet', async () => {
    const firstUser = await fakeSheetTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const secundUser = await fakeSheetTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const group = await fakeSheetTwentyEditionRepository.addGroup({
      "endHours": "22:00:00",
      "initialHours": "19:00:00",
      "name": "mokole",
      "user_first_id": secundUser.id,
      "user_master_id": firstUser.id,
      "weekday": "Sexta"
    });

   await createSheetTwentyEditionService.execute({
      user_id: secundUser.id,
      name: "gatao",
      group_id: group.id
    });

    const show = await showSheetTwentyEditionService.execute({ user_id: secundUser.id, group_id: group.id })

    expect(show).toHaveProperty('id');
  });

  it('should not be able to show sheet', async () => {

    await expect(showSheetTwentyEditionService.execute({
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
