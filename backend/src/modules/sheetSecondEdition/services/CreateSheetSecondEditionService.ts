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

  public async execute(data: ICreateSecondEditionpDTO): Promise<ISheetSecondEdition> {
    const { user_id } = data;
    const idValid = await this.sheetSecondEditionRepository.findByIdUser({ id: user_id })

    if (!idValid) throw new AppError('Usuario invalido');

    const sheetSecondEdition = await this.sheetSecondEditionRepository.create(data);

    return sheetSecondEdition;
  }
}

export default CreatSheetSecondEditionService;
