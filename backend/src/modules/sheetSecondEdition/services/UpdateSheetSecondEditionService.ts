import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import ISheetSecondEditionRepository from '../repositories/ISheetSecondEditionRepository';
import IUpdataSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/IUpdataSecondEditionpDTO';

@injectable()
class UpdataSheetSecondEditionService {
  constructor(
    @inject('SheetSecondEditionRepository')
    private sheetSecondEditionRepository: ISheetSecondEditionRepository,
  ) { }

  public async execute(data: IUpdataSecondEditionpDTO): Promise<ISheetSecondEdition> {
    const { user_id, id } = data;

    const idValidSheet = await this.sheetSecondEditionRepository.findByIdSheet({ id });

    if (!idValidSheet) throw new AppError('Id invalido');

    const idUserValid = await this.sheetSecondEditionRepository.findByIdUser({ id: user_id });

    if (!idUserValid) throw new AppError('Usuario invalido');
  
    const sheetSecondEdition = await this.sheetSecondEditionRepository.update(data);

    return sheetSecondEdition;
  }
}

export default UpdataSheetSecondEditionService;
