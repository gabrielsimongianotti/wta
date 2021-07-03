import { inject, injectable } from 'tsyringe';

import IUser from '@modules/users/infra/typeorm/entities/Users';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/erros/AppError';

interface IRequestDTO {
  name: string;
}

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { }

  public async execute({ name }: IRequestDTO): Promise<IUser[]> {
    let users = await this.cacheProvider.recover<IUser[]>(
      `users-list:`,
    );

    if (!users) {
      users = await this.usersRepository.listUser();

      await this.cacheProvider.save(`users-list:`, users);
    }

    const usersFind = users.filter(user => !user.name.search(name) ? user : null);
    
    if (!usersFind.length) throw new AppError('nome não encontrado');

    return usersFind;
  }
}

export default ShowUserService;
