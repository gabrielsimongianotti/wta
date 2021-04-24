import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import ISheetTwentyEditionRepository from '../repositories/ISheetTwentyEditionRepository';
import ICreateTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/ICreateTwentyEditionpDTO';

@injectable()
class CreatSheetTwentyEditionService {
  constructor(
    @inject('SheetTwentyEditionRepository')
    private sheetTwentyEditionRepository: ISheetTwentyEditionRepository,
  ) { }

  public async execute(data: ICreateTwentyEditionpDTO): Promise<ISheetTwentyEdition> {
    const { user_id } = data;
    const idValid = await this.sheetTwentyEditionRepository.findByIdUser({ id: user_id })

    if (!idValid) throw new AppError('Usuario invalido');

    const sheetTwentyEdition = await this.sheetTwentyEditionRepository.create(data);

    return sheetTwentyEdition;
  }
}

export default CreatSheetTwentyEditionService;
