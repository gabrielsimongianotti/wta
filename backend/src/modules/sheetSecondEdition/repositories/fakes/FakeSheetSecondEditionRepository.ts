import { uuid } from 'uuidv4';

import ISheetSecondEditionRepository from '@modules/sheetSecondEdition/repositories/ISheetSecondEditionRepository';
import ICreateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/ICreateSecondEditionpDTO';
import SheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import User from '@modules/users/infra/typeorm/entities/Users';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUsersDTO';

class FakeSheetSecondEditionRepository implements ISheetSecondEditionRepository {

  private sheetSecondEdition: SheetSecondEdition[] = [];
  private users: User[] = [];

  public async addUser(userData: ICreateUsersDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);
    console.log(user)
    await this.users.push(user);
    console.log(this.users)
    return user
  }

  public async findByIdUser({ id }: { id: string; }): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)
    console.log(this.users, id, user)
    return user
  }

  public async create(data: ICreateSecondEditionpDTO): Promise<SheetSecondEdition> {
    const sheetSecondEdition = new SheetSecondEdition();

    Object.assign(sheetSecondEdition, { id: uuid(), ...data });

    this.sheetSecondEdition.push(sheetSecondEdition);

    return sheetSecondEdition;
  }
}

export default FakeSheetSecondEditionRepository;
