import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import ISheetSecondEditionRepository from '../repositories/ISheetSecondEditionRepository';
import ICreateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/ICreateSecondEditionpDTO';

@injectable()
class ShowSheetSecondEditionService {
  constructor(
    @inject('SheetSecondEditionRepository')
    private sheetSecondEditionRepository: ISheetSecondEditionRepository,
  ) { }

  public async execute(id: string): Promise<ISheetSecondEdition> {

    const sheetSecondEdition = await this.sheetSecondEditionRepository.findByIdSheet({ id })
    console.log(sheetSecondEdition)
    if (!sheetSecondEdition) throw new AppError('id invalido');

    return sheetSecondEdition;
  }
}

export default ShowSheetSecondEditionService;
