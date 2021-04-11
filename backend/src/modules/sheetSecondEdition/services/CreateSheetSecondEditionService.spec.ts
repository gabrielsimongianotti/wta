import AppError from '@shared/erros/AppError';


import FakeSheetSecondEditionRepository from '../repositories/fakes/FakeSheetSecondEditionRepository';
import CreateSheetSecondEditionService from './CreateSheetSecondEditionService';

let fakeSheetSecondEditionRepository: FakeSheetSecondEditionRepository;
let createSheetSecondEditionService: CreateSheetSecondEditionService;


describe('sheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetSecondEditionRepository = new FakeSheetSecondEditionRepository();

    createSheetSecondEditionService = new CreateSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    );

  });

  it('should be able to create a new sheet', async () => {
    const { id = '' } = await fakeSheetSecondEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const sheetSecondEditionService = await createSheetSecondEditionService.execute({
      user_id: id,
      name: "gatao"
    });
    expect(sheetSecondEditionService).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await expect(createSheetSecondEditionService.execute({
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      name: "gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
