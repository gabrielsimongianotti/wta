import { inject, injectable } from 'tsyringe';

import IFetiches from '@modules/fetiches/infra/typeorm/entities/Fetiches';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IFetichesRepository from '../repositories/IFetichesRepository';

interface IRequestDTO {
  name: string;
  level: number;
  description: string;
  system: string;
}

@injectable()
class CreateFeticheService {
  constructor(
    @inject('FetichesRepository')
    private fetichesRepository: IFetichesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    level,
    description,
    system,
  }: IRequestDTO): Promise<IFetiches> {
    const checkSameName = await this.fetichesRepository.findByName(name);

    if (checkSameName) {
      throw new AppError('Este fetiches já esta cadastrado');
    }

    const fetiches = await this.fetichesRepository.create({
      name,
      level,
      description,
      system,
    });

    await this.cacheProvider.invalidatePrefix('fetiches-list:*');
    return fetiches;
  }
}

export default CreateFeticheService;
