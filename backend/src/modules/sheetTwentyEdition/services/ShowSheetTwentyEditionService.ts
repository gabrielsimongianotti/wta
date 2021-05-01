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

  public async execute({ user_id, group_id }: { user_id: string, group_id: string; }): Promise<ISheetTwentyEdition> {


    const sheetTwentyEdition = await this.sheetTwentyEditionRepository.findByIdGroupAndIdUser({ user_id, group_id })

    if (!sheetTwentyEdition) throw new AppError('ids invalido');

    return sheetTwentyEdition;
  }
}

export default ShowSheetTwentyEditionService;
