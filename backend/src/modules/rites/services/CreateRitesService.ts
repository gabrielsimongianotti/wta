import { inject, injectable } from 'tsyringe';

import IRites from '@modules/rites/infra/typeorm/entities/Rites';
import AppError from '@shared/erros/AppError';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IRitesRepositoty from '../repositories/IRitesRepository';

interface IRequestDTO {
  name: string;
  level: number;
  description: string;
  system: string;
}

@injectable()
class CreateRitesService {
  constructor(
    @inject('RitesRepository')
    private ritesRepository: IRitesRepositoty,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    level,
    description,
    system,
  }: IRequestDTO): Promise<IRites> {
    const checkSameName = await this.ritesRepository.findByName(name);

    if (checkSameName) {
      throw new AppError('Este ritual já esta cadastrado');
    }

    const rites = await this.ritesRepository.create({
      name,
      level,
      description,
      system,
    });

    await this.cacheProvider.invalidatePrefix('rites-list');
    return rites;
  }
}

export default CreateRitesService;
