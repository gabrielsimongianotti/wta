import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import AppError from '@shared/erros/AppError';
import { inject, injectable } from 'tsyringe';

import IGroupRepository from '../repositories/IGroupRepository';

@injectable()
class RemoveGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { }

  public async execute(id: string): Promise<void> {
    const group = await this.groupRepository.validId(id);

    if (group) throw new AppError('id is`not valid');

    await this.groupRepository.delete(id);
  }
}

export default RemoveGroupService;
