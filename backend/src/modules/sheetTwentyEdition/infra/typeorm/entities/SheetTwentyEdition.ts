import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';
import Gift from '@modules/gifts/infra/typeorm/entities/Gifts';
import Rite from '@modules/rites/infra/typeorm/entities/Rites';
import Merit from '@modules/merit/infra/typeorm/entities/Merit';
import Flaw from '@modules/flaw/infra/typeorm/entities/Flaw';
import Fetiche from '@modules/fetiches/infra/typeorm/entities/Fetiches';
import Background from '@modules/backgrounds/infra/typeorm/entities/Backgrounds';

@Entity('sheetTwentyEdition')
class SheetTwentyEdition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  player: string;

  @Column()
  augurio: string;

  @Column()
  garou_name: string;

  @Column()
  totem: string;

  @Column()
  tribe: 'Fúria Negra' | 'Roedor de Ossos' | 'Filho de Gaia' | 'Fianna' | 'Cria de Fenris' | 'Andarilho do Asfalto' | 'Garra Vermelha' | 'Senhor das Sombras' | 'Peregrino Silencioso' | 'Presa de Prata' | 'Portador da Luz Interior' | 'Uktena' | 'Wendigo';

  @Column()
  breed: string;

  @Column()
  rage: number;

  @Column()
  spendingRage: number;

  @Column()
  gnosis: number;

  @Column()
  spendingGnosis: number;

  @Column()
  willpower: number;

  @Column()
  spendingWillpower: number;

  @Column()
  glory: number;

  @Column()
  spendingGlory: number;

  @Column()
  honor: number;

  @Column()
  spendingHonor: number;

  @Column()
  wisdom: number;

  @Column()
  spendingWisdom: number;

  @Column()
  rank: 'Cliath' | 'Fostern' | 'Adren' | 'Athro' | 'Elder';

  @Column()
  experience: number;

  @Column()
  strength: number;

  @Column()
  dexterity: number;

  @Column()
  stamina: number;

  @Column()
  charisma: number;

  @Column()
  manipulation: number;

  @Column()
  appearance: number;

  @Column()
  perception: number;

  @Column()
  intelligence: number;

  @Column()
  wits: number;

  @Column()
  alertness: number;

  @Column()
  athletics: number;

  @Column()
  brawl: number;

  @Column()
  empathy: number;

  @Column()
  expression: number;

  @Column()
  intimidation: number;

  @Column()
  leadership: number;

  @Column()
  primal_urge: number;

  @Column()
  streetwise: number;

  @Column()
  subterfuge: number;

  @Column()
  animal_ken: number;

  @Column()
  crafts: number;

  @Column()
  drive: number;

  @Column()
  etiquette: number;

  @Column()
  firearms: number;

  @Column()
  larceny: number;

  @Column()
  melee: number;

  @Column()
  performance: number;

  @Column()
  stealth: number;

  @Column()
  survival: number;

  @Column()
  academics: number;

  @Column()
  computer: number;

  @Column()
  enigmas: number;

  @Column()
  investigation: number;

  @Column()
  law: number;

  @Column()
  medicine: number;

  @Column()
  occult: number;

  @Column()
  rituals: number;

  @Column()
  technology: number;

  @Column()
  science: number;

  @Column()
  gift_id: string;

  @ManyToOne(() => Gift)
  @JoinColumn({ name: 'gift_id' })
  gifts: Gift;

  @Column()
  flaw_id: string;

  @ManyToOne(() => Flaw)
  @JoinColumn({ name: 'flaw_id' })
  flaws: Flaw;

  @Column()
  rite_id: string;

  @ManyToOne(() => Rite)
  @JoinColumn({ name: 'rite_id' })
  rites: Rite;

  @Column()
  merit_id: string;

  @ManyToOne(() => Merit)
  @JoinColumn({ name: 'merit_id' })
  merits: Merit;

  @Column()
  fetiches_id: string;

  @ManyToOne(() => Fetiche)
  @JoinColumn({ name: 'fetiches_id' })
  fetiches: Fetiche;

  @Column()
  backgrounds_id: string;

  @ManyToOne(() => Background)
  @JoinColumn({ name: 'backgrounds_id' })
  backgrounds: Background;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SheetTwentyEdition;
