import { uuid } from 'uuidv4';

import ISheetTwentyEditionRepository from '@modules/sheetTwentyEdition/repositories/ISheetTwentyEditionRepository';
import ICreateTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/ICreateTwentyEditionpDTO';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';
import SheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import User from '@modules/users/infra/typeorm/entities/Users';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUsersDTO';

class FakeSheetTwentyEditionRepository implements ISheetTwentyEditionRepository {

  private sheetTwentyEdition: SheetTwentyEdition[] = [];
  private users: User[] = [];

  public async create(data: ICreateTwentyEditionpDTO): Promise<SheetTwentyEdition> {
    const sheetTwentyEdition = new SheetTwentyEdition();

    Object.assign(sheetTwentyEdition, { id: uuid(), ...data });

    this.sheetTwentyEdition.push(sheetTwentyEdition);

    return sheetTwentyEdition;
  }

  public async update(data: IUpdataTwentyEditionpDTO): Promise<SheetTwentyEdition> {
    const sheetTwentyEdition = new SheetTwentyEdition();
    const position = await this.sheetTwentyEdition.findIndex(
      oldGroup => oldGroup.id === data.id,
    );

    await Object.assign(sheetTwentyEdition, data);

    this.sheetTwentyEdition[position] = sheetTwentyEdition;

    return sheetTwentyEdition;
  }

  public async findByIdSheet({ id }: { id: string; }): Promise<SheetTwentyEdition | undefined> {
    const sheet = this.sheetTwentyEdition.find(sheetTwentyEdition => sheetTwentyEdition.id === id)
 
    return sheet
  }

  public async addUser(userData: ICreateUsersDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    await this.users.push(user);

    return user
  }

  public async findByIdUser({ id }: { id: string; }): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)
 
    return user
  }

  public async  delete({ id }: { id: string; }): Promise<void> {
    await this.sheetTwentyEdition.splice(
      this.sheetTwentyEdition.findIndex(sheet => sheet.id === id),
      1,
    );
  }
}

export default FakeSheetTwentyEditionRepository;
