import { uuid } from 'uuidv4';

import ISheetSecondEditionRepository from '@modules/sheetSecondEdition/repositories/ISheetSecondEditionRepository';
import ICreateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/ICreateSecondEditionpDTO';
import IUpdateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/IUpdataSecondEditionpDTO';
import SheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import User from '@modules/users/infra/typeorm/entities/Users';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUsersDTO';

class FakeSheetSecondEditionRepository implements ISheetSecondEditionRepository {
  private sheetSecondEdition: SheetSecondEdition[] = [];
  private users: User[] = [];

  public async create(data: ICreateSecondEditionpDTO): Promise<SheetSecondEdition> {
    const sheetSecondEdition = new SheetSecondEdition();

    Object.assign(sheetSecondEdition, { id: uuid(), ...data });

    this.sheetSecondEdition.push(sheetSecondEdition);

    return sheetSecondEdition;
  }

  public async update(data: IUpdateSecondEditionpDTO): Promise<SheetSecondEdition> {
    const sheetSecondEdition = new SheetSecondEdition();
    const position = await this.sheetSecondEdition.findIndex(
      oldGroup => oldGroup.id === data.id,
    );

    await Object.assign(sheetSecondEdition, data);

    this.sheetSecondEdition[position] = sheetSecondEdition;

    return sheetSecondEdition;
  }

  public async findByIdSheet({ id }: { id: string; }): Promise<SheetSecondEdition | undefined> {
    const sheet = this.sheetSecondEdition.find(sheetSecondEdition => sheetSecondEdition.id === id)
 
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
}

export default FakeSheetSecondEditionRepository;
