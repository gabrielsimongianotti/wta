import { getRepository, Repository } from 'typeorm';

import ISheetTwentyEditionRepository from '@modules/sheetTwentyEdition/repositories/ISheetTwentyEditionRepository';
import ICreateTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/ICreateTwentyEditionpDTO';
import IUpdataTwentyEditionpDTO from '@modules/sheetTwentyEdition/dtos/IUpdataTwentyEditionpDTO';
import SheetTwentyEdition from '@modules/sheetTwentyEdition/infra/typeorm/entities/SheetTwentyEdition';
import Users from '@modules/users/infra/typeorm/entities/Users';
import Group from '@modules/group/infra/typeorm/entities/Group';

class SheetTwentyEditionRepository implements ISheetTwentyEditionRepository {
  private ormRepository: Repository<SheetTwentyEdition>;
  private UsersRepository: Repository<Users>;
  private GroupRepository: Repository<Group>;

  constructor() {
    this.ormRepository = getRepository(SheetTwentyEdition);
    this.UsersRepository = getRepository(Users);
    this.GroupRepository = getRepository(Group);

  }

  public async create({
    user_id,
    group_id,
    name = "",
    tribe,
    breed = '',
    totem = '',
    player = "",
    augurio = "",
    garou_name = "",
    rage = 0,
    spendingRage = 0,
    gnosis = 0,
    spendingGnosis = 0,
    willpower = 0,
    spendingWillpower = 0,
    glory = 0,
    spendingGlory = 0,
    honor = 0,
    spendingHonor = 0,
    wisdom = 0,
    spendingWisdom = 0,
    rank = "Cliath",
    experience = 0,
    strength = 0,
    dexterity = 0,
    stamina = 0,
    charisma = 0,
    manipulation = 0,
    appearance = 0,
    perception = 0,
    intelligence = 0,
    wits = 0,
    alertness = 0,
    athletics = 0,
    brawl = 0,
    empathy = 0,
    expression = 0,
    intimidation = 0,
    leadership = 0,
    primal_urge = 0,
    streetwise = 0,
    subterfuge = 0,
    animal_ken = 0,
    crafts = 0,
    drive = 0,
    etiquette = 0,
    firearms = 0,
    larceny = 0,
    melee = 0,
    performance = 0,
    stealth = 0,
    survival = 0,
    academics = 0,
    computer = 0,
    enigmas = 0,
    investigation = 0,
    law = 0,
    medicine = 0,
    occult = 0,
    rituals = 0,
    technology = 0,
    science = 0,
    gift_id = null,
    flaw_id = null,
    rite_id = null,
    merit_id = null,
    fetiches_id = null,
    backgrounds_id = null
  }: ICreateTwentyEditionpDTO): Promise<SheetTwentyEdition> {

    const sheetSecondEdition = await this.ormRepository.create({
      user_id,
      group_id,
      name,
      player,
      augurio,
      garou_name,
      tribe,
      breed,
      totem,
      rage,
      spendingRage,
      gnosis,
      spendingGnosis,
      willpower,
      spendingWillpower,
      glory,
      spendingGlory,
      honor,
      spendingHonor,
      wisdom,
      spendingWisdom,
      rank,
      experience,
      strength,
      dexterity,
      stamina,
      charisma,
      manipulation,
      appearance,
      perception,
      intelligence,
      wits,
      alertness,
      athletics,
      brawl,
      empathy,
      expression,
      intimidation,
      leadership,
      primal_urge,
      streetwise,
      subterfuge,
      animal_ken,
      crafts,
      drive,
      etiquette,
      firearms,
      larceny,
      melee,
      performance,
      stealth,
      survival,
      academics,
      computer,
      enigmas,
      investigation,
      law,
      medicine,
      occult,
      rituals,
      technology,
      science,
      gift_id,
      flaw_id,
      rite_id,
      merit_id,
      fetiches_id,
      backgrounds_id
    });

    await this.ormRepository.save(sheetSecondEdition);

    return sheetSecondEdition;
  }

  public async update({
    id = "",
    user_id = "",
    group_id,
    name = "",
    player = "",
    augurio = "",
    tribe,
    breed = '',
    totem = '',
    garou_name = "",
    rage = 0,
    spendingRage = 0,
    gnosis = 0,
    spendingGnosis = 0,
    willpower = 0,
    spendingWillpower = 0,
    glory = 0,
    spendingGlory = 0,
    honor = 0,
    spendingHonor = 0,
    wisdom = 0,
    spendingWisdom = 0,
    rank = "Cliath",
    experience = 0,
    strength = 0,
    dexterity = 0,
    stamina = 0,
    charisma = 0,
    manipulation = 0,
    appearance = 0,
    perception = 0,
    intelligence = 0,
    wits = 0,
    alertness = 0,
    athletics = 0,
    brawl = 0,
    empathy = 0,
    expression = 0,
    intimidation = 0,
    leadership = 0,
    primal_urge = 0,
    streetwise = 0,
    subterfuge = 0,
    animal_ken = 0,
    crafts = 0,
    drive = 0,
    etiquette = 0,
    firearms = 0,
    larceny = 0,
    melee = 0,
    performance = 0,
    stealth = 0,
    survival = 0,
    academics = 0,
    computer = 0,
    enigmas = 0,
    investigation = 0,
    law = 0,
    medicine = 0,
    occult = 0,
    rituals = 0,
    technology = 0,
    science = 0,
    gift_id = null,
    flaw_id = null,
    rite_id = null,
    merit_id = null,
    fetiches_id = null,
    backgrounds_id = null
  }: IUpdataTwentyEditionpDTO): Promise<SheetTwentyEdition> {
    const edit = await this.ormRepository.save({
      id,
      user_id,
      group_id,
      name,
      player,
      augurio,
      tribe,
      breed,
      totem,
      garou_name,
      rage,
      spendingRage,
      gnosis,
      spendingGnosis,
      willpower,
      spendingWillpower,
      glory,
      spendingGlory,
      honor,
      spendingHonor,
      wisdom,
      spendingWisdom,
      rank,
      experience,
      strength,
      dexterity,
      stamina,
      charisma,
      manipulation,
      appearance,
      perception,
      intelligence,
      wits,
      alertness,
      athletics,
      brawl,
      empathy,
      expression,
      intimidation,
      leadership,
      primal_urge,
      streetwise,
      subterfuge,
      animal_ken,
      crafts,
      drive,
      etiquette,
      firearms,
      larceny,
      melee,
      performance,
      stealth,
      survival,
      academics,
      computer,
      enigmas,
      investigation,
      law,
      medicine,
      occult,
      rituals,
      technology,
      science,
      gift_id,
      flaw_id,
      rite_id,
      merit_id,
      fetiches_id,
      backgrounds_id
    });

    return edit;
  }

  public async delete({ id }: { id: string; }): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByIdUser(id: string): Promise<Users | undefined> {
    const user = await this.UsersRepository.findOne({
      where: { id },
    });

    return user;
  }

  public async findByIdGroup(id: string): Promise<Group | undefined> {
    const group = await this.GroupRepository.findOne({
      where: { id },
    });

    return group;
  }

  public async findByIdSheet(id: string): Promise<SheetTwentyEdition | undefined> {
    const Sheet = await this.ormRepository.findOne({
      where: { id },
    });

    return Sheet;
  }
  public async findByIdGroupAndIdUser({ group_id, user_id }: { user_id: string; group_id: string }): Promise<SheetTwentyEdition | undefined> {
    const Sheet = this.ormRepository.findOne({
      where: { group_id, user_id },
    });
    
    return Sheet;
  }
}

export default SheetTwentyEditionRepository;
