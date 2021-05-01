import AppError from '@shared/erros/AppError';


import FakeSheetTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';

let fakeSheetTwentyEditionRepository: FakeSheetTwentyEditionRepository;
let createSheetTwentyEditionService: CreateSheetTwentyEditionService;


describe('sheetTwentyEditionService', () => {
  beforeEach(() => {
    fakeSheetTwentyEditionRepository = new FakeSheetTwentyEditionRepository();

    createSheetTwentyEditionService = new CreateSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );

  });

  it('should be able to create a new sheet', async () => {
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

    const sheetTwentyEditionService = await createSheetTwentyEditionService.execute({
      user_id: secundUser.id,
      name: "gatao",
      group_id: group.id
    });
    
    expect(sheetTwentyEditionService).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await expect(createSheetTwentyEditionService.execute({
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
