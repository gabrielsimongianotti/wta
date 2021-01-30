export default interface ICreateGroupDTO {
  name: string;
  weekday:
    | 'Segunda'
    | 'Terça'
    | 'Quarta'
    | 'Quinta'
    | 'Sexta'
    | 'Sabado'
    | 'Domingo';
  initialHours:
    | '08:00:00'
    | '08:30:00'
    | '09:00:00'
    | '10:00:00'
    | '10:30:00'
    | '11:00:00'
    | '11:30:00'
    | '12:00:00'
    | '12:30:00'
    | '13:00:00'
    | '13:30:00'
    | '14:00:00'
    | '14:30:00'
    | '15:00:00'
    | '15:30:00'
    | '16:00:00'
    | '16:30:00'
    | '17:00:00'
    | '17:30:00'
    | '18:00:00'
    | '18:30:00'
    | '19:00:00'
    | '19:30:00'
    | '20:00:00'
    | '20:30:00'
    | '21:00:00'
    | '21:30:00'
    | '22:00:00'
    | '22:30:00'
    | '23:00:00'
    | '23:30:00'
    | '00:00:00';
  endHours:
    | '08:00:00'
    | '08:30:00'
    | '09:00:00'
    | '10:00:00'
    | '10:30:00'
    | '11:00:00'
    | '11:30:00'
    | '12:00:00'
    | '12:30:00'
    | '13:00:00'
    | '13:30:00'
    | '14:00:00'
    | '14:30:00'
    | '15:00:00'
    | '15:30:00'
    | '16:00:00'
    | '16:30:00'
    | '17:00:00'
    | '17:30:00'
    | '18:00:00'
    | '18:30:00'
    | '19:00:00'
    | '19:30:00'
    | '20:00:00'
    | '20:30:00'
    | '21:00:00'
    | '21:30:00'
    | '22:00:00'
    | '22:30:00'
    | '23:00:00'
    | '23:30:00'
    | '00:00:00';
  user_first_id: string;
  user_secund_id: string;
  user_third_id: string;
  user_fourth_id: string;
  user_fifth_id: string;
  user_sixth_id: string;
  user_seventh_id: string;
  user_master_id: string;
}
