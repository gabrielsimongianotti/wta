import { inject, injectable } from 'tsyringe';

import IFlaw from '@modules/flaw/infra/typeorm/entities/Flaw';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IFlawRepositoty from '../repositories/IFlawRepository';

interface IRequestDTO {
  name: string;
  bonus: number;
  description: string;
  type: 'supernatural' | 'social' | 'mental' | 'physical';
  system: string;
}

@injectable()
class CreateFlawService {
  constructor(
    @inject('FlawRepository')
    private flawRepositoty: IFlawRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    bonus,
    description,
    type,
    system,
  }: IRequestDTO): Promise<IFlaw> {
    const checkSameName = await this.flawRepositoty.findByName(name);

    if (checkSameName) {
      throw new AppError('Este defeito já esta cadastrado');
    }

    const flaws = await this.flawRepositoty.create({
      name,
      bonus,
      description,
      type,
      system,
    });

    await this.cacheProvider.invalidatePrefix('flaws-list:');
    return flaws;
  }
}

export default CreateFlawService;
