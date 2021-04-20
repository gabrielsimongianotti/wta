import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import ISheetSecondEditionRepository from '../repositories/ISheetSecondEditionRepository';
import ICreateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/ICreateSecondEditionpDTO';

@injectable()
class CreatSheetSecondEditionService {
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

export default CreatSheetSecondEditionService;
