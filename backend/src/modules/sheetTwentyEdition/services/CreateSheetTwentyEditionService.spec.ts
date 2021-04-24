import AppError from '@shared/erros/AppError';


import FakeTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';

let fakeTwentyEditionRepository: FakeTwentyEditionRepository;
let createSheetTwentyEditionService: CreateSheetTwentyEditionService;


describe('sheetTwentyEditionService', () => {
  beforeEach(() => {
    fakeTwentyEditionRepository = new FakeTwentyEditionRepository();

    createSheetTwentyEditionService = new CreateSheetTwentyEditionService(
      fakeTwentyEditionRepository
    );

  });

  it('should be able to create a new sheet', async () => {
    const { id = '' } = await fakeTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const sheetTwentyEditionService = await createSheetTwentyEditionService.execute({
      user_id: id,
      name: "gatao"
    });
    expect(sheetTwentyEditionService).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await expect(createSheetTwentyEditionService.execute({
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      name: "gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
