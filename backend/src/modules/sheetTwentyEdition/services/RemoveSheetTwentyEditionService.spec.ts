import AppError from '@shared/erros/AppError';


import FakeSheetTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';
import RemoveSheetTwentyEditionService from './RemoveSheetTwentyEditionService';

let fakeSheetTwentyEditionRepository: FakeSheetTwentyEditionRepository;
let createSheetTwentyEditionService: CreateSheetTwentyEditionService;
let removeSheetSecondEditionService: RemoveSheetTwentyEditionService;

describe('DeleteSheetTwentyEditionService', () => {
  beforeEach(() => {
    fakeSheetTwentyEditionRepository = new FakeSheetTwentyEditionRepository();

    createSheetTwentyEditionService = new CreateSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );

    removeSheetSecondEditionService = new RemoveSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    )
  });

  it('should be able to delete the sheet', async () => {
    const deleteFile = jest.spyOn(removeSheetSecondEditionService, 'execute');
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

    const sheetTwentyEdition = await createSheetTwentyEditionService.execute({
      user_id: secundUser.id,
      name: "gatao",
      group_id: group.id
    });

    await removeSheetSecondEditionService.execute(sheetTwentyEdition.id)

    expect(deleteFile).toHaveBeenCalledWith(sheetTwentyEdition.id);
  });

  it('should not be able to delete sheet', async () => {

    await expect(removeSheetSecondEditionService.execute(
      "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
    ),
    ).rejects.toBeInstanceOf(AppError);
  });
});
