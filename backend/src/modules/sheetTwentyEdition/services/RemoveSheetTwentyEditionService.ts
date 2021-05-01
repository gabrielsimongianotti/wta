import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetTwentyEditionRepository from '../repositories/ISheetTwentyEditionRepository';

@injectable()
class RemoveSheetTwentyEditionService {
  constructor(
    @inject('SheetTwentyEditionRepository')
    private sheetTwentyEditionRepository: ISheetTwentyEditionRepository,
  ) { }

  public async execute(id: string): Promise<void> {

    const sheetTwentyEdition = await this.sheetTwentyEditionRepository.findByIdSheet(id)

    if (!sheetTwentyEdition) throw new AppError('id invalido');

    await this.sheetTwentyEditionRepository.delete({ id });
  }
}

export default RemoveSheetTwentyEditionService;
