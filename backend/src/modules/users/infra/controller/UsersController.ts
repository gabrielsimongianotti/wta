import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, email, password });

    return response.json(classToClass(user));
  }
  
  public async search(request: Request, response: Response):Promise<Response> {
    const { name } = request.params;
    const searchUser = container.resolve(ShowUserService);

    const user = await searchUser.execute({ name });

    return response.json(classToClass(user));
  }
}
