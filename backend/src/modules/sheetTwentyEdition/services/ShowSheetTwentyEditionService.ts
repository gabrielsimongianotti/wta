import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import ISheetTwentyEditionRepository from '../repositories/ISheetTwentyEditionRepository';

@injectable()
class ShowSheetTwentyEditionService {
  constructor(
    @inject('SheetTwentyEditionRepository')
    private sheetTwentyEditionRepository: ISheetTwentyEditionRepository,
  ) { }

  public async execute(id: string): Promise<ISheetTwentyEdition> {

    const sheetTwentyEdition = await this.sheetTwentyEditionRepository.findByIdSheet({ id })

    if (!sheetTwentyEdition) throw new AppError('id invalido',sheetTwentyEdition);

    return sheetTwentyEdition;
  }
}

export default ShowSheetTwentyEditionService;
