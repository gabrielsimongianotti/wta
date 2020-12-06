export default interface ICreateMeritDTO {
  name: string;
  description: string;
  cost: number;
  type: 'supernatural' | 'social' | 'mental' | 'physical';
  system: string;
}
