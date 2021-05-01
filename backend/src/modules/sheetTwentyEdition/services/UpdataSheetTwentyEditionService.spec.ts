import AppError from '@shared/erros/AppError';

import FakeSheetTwentyEditionRepository from '../repositories/fakes/FakeSheetTwentyEditionRepository';
import UpdataSheetTwentyEditionService from './UpdataSheetTwentyEditionService';
import CreateSheetTwentyEditionService from './CreateSheetTwentyEditionService';

let fakeSheetTwentyEditionRepository: FakeSheetTwentyEditionRepository;
let updataSheetTwentyEditionService: UpdataSheetTwentyEditionService;
let createSheetTwentyEditionService: CreateSheetTwentyEditionService;

describe('UpdataSheetTwentyEditionService', () => {
  beforeEach(() => {
    fakeSheetTwentyEditionRepository = new FakeSheetTwentyEditionRepository();

    createSheetTwentyEditionService = new CreateSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );

    updataSheetTwentyEditionService = new UpdataSheetTwentyEditionService(
      fakeSheetTwentyEditionRepository
    );
  });

  it('should be able to update sheet', async () => {
    const user = await fakeSheetTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const Sheet = await createSheetTwentyEditionService.execute({
      user_id: user.id,
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "gatao"
    });

    const sheetTwentyEditionService = await updataSheetTwentyEditionService.execute({
      id: Sheet.id,
      user_id: user.id,
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "Gatao"
    });
    expect(sheetTwentyEditionService).toHaveProperty('id');
  });

  it('should not be able to update because the id', async () => {
    await expect(updataSheetTwentyEditionService.execute({
      id:'h',
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
  
  it('should not be able to update because the group_id', async () => {
    const user = await fakeSheetTwentyEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const Sheet = await createSheetTwentyEditionService.execute({
      user_id: user.id,
      group_id: "73d27c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "gatao"
    });

    await expect(updataSheetTwentyEditionService.execute({
      id: Sheet.id,
      user_id: user.id,
      group_id: "73d7c4f-a73f-4fad-8da8-e5b8859b5afd",
      name: "Gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
