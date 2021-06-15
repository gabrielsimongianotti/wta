import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';

@Entity('group')
class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_first_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_first_id' })
  userFirst: User;

  @Column()
  user_secund_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_secund_id' })
  userSecund: User;

  @Column()
  user_third_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_third_id' })
  userThird: User;

  @Column()
  user_fourth_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_fourth_id' })
  userFourth: User;

  @Column()
  user_fifth_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_fifth_id' })
  userFifth: User;

  @Column()
  user_sixth_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_sixth_id' })
  userSixth: User;

  @Column()
  user_seventh_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_seventh_id' })
  userSeventh: User;

  @Column()
  user_master_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_master_id' })
  userMaster: User;

  @Column()
  name: string;

  @Column()
  weekday: string;

  @Column()
  initialHours: string;

  @Column()
  endHours: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Group;
