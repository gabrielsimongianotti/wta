import { inject, injectable } from 'tsyringe';

import IUser from '@modules/users/infra/typeorm/entities/Users';
import AppError from '@shared/erros/AppError';
import IHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ name, email, password }: IRequestDTO): Promise<IUser> {
    const checkSameEmail = await this.usersRepository.findByEmail(email);

    if (checkSameEmail) {
      throw new AppError('This e-mail is already registered.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    await this.cacheProvider.invalidatePrefix('providers-list:*');
    return user;
  }
}

export default CreateUserService;
