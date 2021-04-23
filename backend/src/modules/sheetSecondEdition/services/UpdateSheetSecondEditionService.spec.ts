import AppError from '@shared/erros/AppError';

import FakeSheetSecondEditionRepository from '../repositories/fakes/FakeSheetSecondEditionRepository';
import UpdateSheetSecondEditionService from './UpdateSheetSecondEditionService';
import CreateSheetSecondEditionService from './CreateSheetSecondEditionService';

let fakeSheetSecondEditionRepository: FakeSheetSecondEditionRepository;
let updateSheetSecondEditionService: UpdateSheetSecondEditionService;
let createSheetSecondEditionService: CreateSheetSecondEditionService;

describe('UpdataSheetSecondEditionService', () => {
  beforeEach(() => {
    fakeSheetSecondEditionRepository = new FakeSheetSecondEditionRepository();

    createSheetSecondEditionService = new CreateSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    );

    updateSheetSecondEditionService = new UpdateSheetSecondEditionService(
      fakeSheetSecondEditionRepository
    );
  });

  it('should be able to update sheet', async () => {
    const user = await fakeSheetSecondEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const Sheet = await createSheetSecondEditionService.execute({
      user_id: user.id,
      name: "gatao"
    });

    const sheetSecondEditionService = await updateSheetSecondEditionService.execute({
      id: Sheet.id,
      user_id: user.id,
      name: "Gatao"
    });
    expect(sheetSecondEditionService).toHaveProperty('id');
  });

  it('should not be able to update because the id', async () => {
    await expect(updateSheetSecondEditionService.execute({
      id:'h',
      user_id: "f1e57948-dbf1-4e6b-85b6-d9cd4344d4d1",
      name: "gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
  
  it('should not be able to update because the id', async () => {
    const user = await fakeSheetSecondEditionRepository.addUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const Sheet = await createSheetSecondEditionService.execute({
      user_id: user.id,
      name: "gatao"
    });

    await expect(updateSheetSecondEditionService.execute({
      id: Sheet.id,
      user_id: "idsas",
      name: "Gatao"
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
