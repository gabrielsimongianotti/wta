export default interface ICreateTwentyEditionpDTO {
  user_id: string;
  name?: string | null;
  player?: string | null;
  augurio?: string | null;
  garou_name?: string | null;
  totem?: string | null;
  breed?: string | null;
  tribe?: 'Fúria Negra' | 'Roedor de Ossos' | 'Filho de Gaia' | 'Fianna' | 'Cria de Fenris' | 'Andarilho do Asfalto' | 'Garra Vermelha' | 'Senhor das Sombras' | 'Peregrino Silencioso' | 'Presa de Prata' | 'Portador da Luz Interior' | 'Uktena' | 'Wendigo' | null;
  rage?: number | null;
  spendingRage?: number | null;
  gnosis?: number | null;
  spendingGnosis?: number | null;
  willpower?: number | null;
  spendingWillpower?: number | null;
  glory?: number | null;
  spendingGlory?: number | null;
  honor?: number | null;
  spendingHonor?: number | null;
  wisdom?: number | null;
  spendingWisdom?: number | null;
  rank?: 'Cliath' | 'Fostern' | 'Adren' | 'Athro' | 'Elder' | null;
  experience?: number | null;
  strength?: number | null;
  dexterity?: number | null;
  stamina?: number | null;
  charisma?: number | null;
  manipulation?: number | null;
  appearance?: number | null;
  perception?: number | null;
  intelligence?: number | null;
  wits?: number | null;
  alertness?: number | null;
  athletics?: number | null;
  brawl?: number | null;
  empathy?: number | null;
  expression?: number | null;
  intimidation?: number | null;
  leadership?: number | null;
  primal_urge?: number | null;
  streetwise?: number | null;
  subterfuge?: number | null;
  animal_ken?: number | null;
  crafts?: number | null;
  drive?: number | null;
  etiquette?: number | null;
  firearms?: number | null;
  larceny?: number | null;
  melee?: number | null;
  performance?: number | null;
  stealth?: number | null;
  survival?: number | null;
  academics?: number | null;
  computer?: number | null;
  enigmas?: number | null;
  investigation?: number | null;
  law?: number | null;
  medicine?: number | null;
  occult?: number | null;
  rituals?: number | null;
  technology?: number | null;
  science?: number | null;
  gift_id?: string | null;
  flaw_id?: string | null;
  rite_id?: string | null;
  merit_id?: string | null;
  fetiches_id?: string | null;
  backgrounds_id?: string | null;
}
