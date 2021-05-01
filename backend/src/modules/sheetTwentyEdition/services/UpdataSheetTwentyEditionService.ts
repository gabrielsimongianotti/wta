import { inject, injectable } from 'tsyringe';
import AppError from '@shared/erros/AppError';
import ISheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import ISheetTwentyEditionRepository from '../repositories/ISheetTwentyEditionRepository';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';

@injectable()
class UpdataSheetTwentyEditionService {
  constructor(
    @inject('SheetTwentyEditionRepository')
    private sheetTwentyEditionRepository: ISheetTwentyEditionRepository,
  ) { }

  public async execute(data: IUpdataTwentyEditionpDTO): Promise<ISheetTwentyEdition> {
    const { user_id, group_id } = data;
    
    const idUserValid = await this.sheetTwentyEditionRepository.findByIdUser(user_id);

    if (!idUserValid) throw new AppError('Usuario invalido');

    const idValidSheet = await this.sheetTwentyEditionRepository.findByIdGroupAndIdUser({ user_id, group_id });

    if (!idValidSheet) throw new AppError('Você não pode atualizar essa ficha');

    const sheetTwentyEdition = await this.sheetTwentyEditionRepository.update(data);

    return sheetTwentyEdition;
  }
}

export default UpdataSheetTwentyEditionService;
