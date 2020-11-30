export default interface ICreateFlawDTOS {
  name: string;
  type: 'supernatural' | 'social' | 'mental' | 'physical';
  description: string;
  bonus: number;
  system: string;
}
