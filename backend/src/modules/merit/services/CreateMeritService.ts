import { inject, injectable } from 'tsyringe';

import IMerit from '@modules/merit/infra/typeorm/entities/Merit';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IMeritRepositoty from '../repositories/IMeritRepositoty';

interface IRequestDTO {
  name: string;
  cost: number;
  description: string;
  type: 'supernatural' | 'social' | 'mental' | 'physical';
  system: string;
}

@injectable()
class CreateMeritService {
  constructor(
    @inject('MeritRepositoty')
    private meritRepositoty: IMeritRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    cost,
    description,
    system,
    type,
  }: IRequestDTO): Promise<IMerit> {
    const checkSameName = await this.meritRepositoty.findByName(name);

    if (checkSameName) {
      throw new AppError('Este don já esta cadastrado');
    }

    const merit = await this.meritRepositoty.create({
      name,
      cost,
      description,
      system,
      type,
    });

    await this.cacheProvider.invalidatePrefix('merits-list:*');

    return merit;
  }
}

export default CreateMeritService;
