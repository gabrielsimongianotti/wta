import AppError from '@shared/erros/AppError';


import FakeSheetTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';
import ShowSheetTwentyEditionService from './ShowSheetTwentyEditionService';

let fakeSheetTwentyEditionRepository: FakeSheetTwentyEditionRepository;
let createSheetSecondEditionService: CreateSheetTwentyEditionService;
let showSheetTwentyEditionService: ShowSheetTwentyEditionService;

describe('ShowSheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetTwentyEditionRepository = new FakeSheetTwentyEditionRepository();

    createSheetSecondEditionService = new CreateSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );

    showSheetTwentyEditionService = new ShowSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    )
  });

  it('should be able to show a sheet', async () => {
    const { id = '' } = await fakeSheetTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const sheetSecondEditionService = await createSheetSecondEditionService.execute({
      user_id: id,
      name: "gatao"
    });

    const show = await showSheetTwentyEditionService.execute(sheetSecondEditionService.id)

     expect(show).toHaveProperty('id');
  });

  it('should not be able to show sheet', async () => {

    await expect(showSheetTwentyEditionService.execute(
      "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
    ),
    ).rejects.toBeInstanceOf(AppError);
  });
});
