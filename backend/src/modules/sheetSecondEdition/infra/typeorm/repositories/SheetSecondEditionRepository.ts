import { getRepository, Repository, Raw } from 'typeorm';

import ISheetSecondEditionRepository from '@modules/sheetSecondEdition/repositories/ISheetSecondEditionRepository';
import ICreateSecondEditionpDTO from '@modules/sheetSecondEdition/dtos/ICreateSecondEditionpDTO';
import SheetSecondEdition from '@modules/sheetSecondEdition/infra/typeorm/entities/SheetSecondEdition';
import Users from '@modules/users/infra/typeorm/entities/Users';
class SheetSecondEditionRepository implements ISheetSecondEditionRepository {
  private ormRepository: Repository<SheetSecondEdition>;
  private UsersRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(SheetSecondEdition);
    this.UsersRepository = getRepository(Users);
  }

  public async create({
    user_id = "",
    name = "",
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
  }: ICreateSecondEditionpDTO): Promise<SheetSecondEdition> {

    const sheetSecondEdition = await this.ormRepository.create({
      user_id,
      name,
      player,
      augurio,
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

    await this.ormRepository.save(sheetSecondEdition);

    return sheetSecondEdition;
  }

  public async findByIdUser({ id }: { id: string }): Promise<Users | undefined> {
    const user = await this.UsersRepository.findOne({
      where: { id },
    });

    return user;
  }
}

export default SheetSecondEditionRepository;
