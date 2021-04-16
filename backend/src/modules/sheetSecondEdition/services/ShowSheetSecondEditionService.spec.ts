import AppError from '@shared/erros/AppError';


import FakeSheetSecondEditionRepository from '../repositories/fakes/FakeSheetSecondEditionRepository';
import CreateSheetSecondEditionService from './CreateSheetSecondEditionService';
import ShowSheetSecondEditionService from './ShowSheetSecondEditionService';

let fakeSheetSecondEditionRepository: FakeSheetSecondEditionRepository;
let createSheetSecondEditionService: CreateSheetSecondEditionService;
let showSheetSecondEditionService: ShowSheetSecondEditionService;

describe('ShowSheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetSecondEditionRepository = new FakeSheetSecondEditionRepository();

    createSheetSecondEditionService = new CreateSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    );

    showSheetSecondEditionService = new ShowSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    )
  });

  it('should be able to show a sheet', async () => {
    const { id = '' } = await fakeSheetSecondEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const sheetSecondEditionService = await createSheetSecondEditionService.execute({
      user_id: id,
      name: "gatao"
    });

    const show = await showSheetSecondEditionService.execute(sheetSecondEditionService.id)

     expect(show).toHaveProperty('id');
  });

  it('should not be able to show sheet', async () => {

    await expect(showSheetSecondEditionService.execute(
      "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
    ),
    ).rejects.toBeInstanceOf(AppError);
  });
});
