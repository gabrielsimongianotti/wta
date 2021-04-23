import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetSecondEditionRepository from '../repositories/ISheetSecondEditionRepository';

@injectable()
class RemoveSheetSecondEditionService {
  constructor(
    @inject('SheetSecondEditionRepository')
    private sheetSecondEditionRepository: ISheetSecondEditionRepository,
  ) { }

  public async execute(id: string): Promise<void> {

    const sheetSecondEdition = await this.sheetSecondEditionRepository.findByIdSheet({ id })
    
    if (!sheetSecondEdition) throw new AppError('id invalido');

    await this.sheetSecondEditionRepository.delete({id});
  }
}

export default RemoveSheetSecondEditionService;
