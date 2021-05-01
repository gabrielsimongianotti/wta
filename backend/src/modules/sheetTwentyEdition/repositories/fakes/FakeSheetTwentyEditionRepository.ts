import { uuid } from 'uuidv4';

import ISheetTwentyEditionRepository from '@modules/sheetTwentyEdition/repositories/ISheetTwentyEditionRepository';
import ICreateTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/ICreateTwentyEditionpDTO';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';
import SheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import User from '@modules/users/infra/typeorm/entities/Users';
import Group from '@modules/group/infra/typeorm/entities/Group';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUsersDTO';
import ICreateGroupDTO from '@modules/group/dtos/ICreateGroupDTO';

class FakeSheetTwentyEditionRepository implements ISheetTwentyEditionRepository {

  private sheetTwentyEdition: SheetTwentyEdition[] = [];
  private users: User[] = [];
  private groups: Group[] = [];

  public async create(data: ICreateTwentyEditionpDTO): Promise<SheetTwentyEdition> {
    const sheetTwentyEdition = new SheetTwentyEdition();
    const groups = new Group()

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

  public async findByIdGroup(id: string): Promise<Group | undefined> {
    const group = this.groups.find(group => group.id === id)

    return group;
  }

  public async findByIdSheet(id: string): Promise<SheetTwentyEdition | undefined> {
    const sheet = this.sheetTwentyEdition.find(sheetTwentyEdition => sheetTwentyEdition.id === id)

    return sheet
  }

  public async findByIdGroupAndIdUser({ group_id, user_id }: { user_id: string; group_id: string }): Promise<SheetTwentyEdition | undefined> {
    const sheet = this.sheetTwentyEdition.find(sheetTwentyEdition => sheetTwentyEdition.user_id === user_id && sheetTwentyEdition.group_id === group_id)

    return sheet
  }

  public async addUser(userData: ICreateUsersDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    await this.users.push(user);

    return user
  }

  public async addGroup(userData: ICreateGroupDTO): Promise<Group> {
    const group = new Group();

    Object.assign(group, { id: uuid() }, userData);

    await this.groups.push(group);

    return group
  }
  public async findByIdUser(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)

    return user
  }

  public async delete({ id }: { id: string; }): Promise<void> {
    await this.sheetTwentyEdition.splice(
      this.sheetTwentyEdition.findIndex(sheet => sheet.id === id),
      1,
    );
  }
}

export default FakeSheetTwentyEditionRepository;
