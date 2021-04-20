import AppError from '@shared/erros/AppError';


import FakeSheetSecondEditionRepository from '../repositories/fakes/FakeSheetSecondEditionRepository';
import CreateSheetSecondEditionService from './CreateSheetSecondEditionService';
import RemoveSheetSecondEditionService from './RemoveSheetSecondEditionService';

let fakeSheetSecondEditionRepository: FakeSheetSecondEditionRepository;
let createSheetSecondEditionService: CreateSheetSecondEditionService;
let removeSheetSecondEditionService: RemoveSheetSecondEditionService;

describe('DeleteSheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetSecondEditionRepository = new FakeSheetSecondEditionRepository();

    createSheetSecondEditionService = new CreateSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    );

    removeSheetSecondEditionService = new RemoveSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    )
  });

  it('should be able to delete the sheet', async () => {
    const deleteFile = jest.spyOn(removeSheetSecondEditionService, 'execute');
    const { id = '' } = await fakeSheetSecondEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const sheetSecondEditionService = await createSheetSecondEditionService.execute({
      user_id: id,
      name: "gatao"
    });

    await removeSheetSecondEditionService.execute(sheetSecondEditionService.id)

     expect(deleteFile).toHaveBeenCalledWith(sheetSecondEditionService.id);
  });

  it('should not be able to delete sheet', async () => {

    await expect(removeSheetSecondEditionService.execute(
      "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
    ),
    ).rejects.toBeInstanceOf(AppError);
  });
});
