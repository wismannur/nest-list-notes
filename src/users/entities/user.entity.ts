import { ListNotes } from '../../list-notes/entities/list-notes.entity';
import { UserInfo } from './user-info.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserInfo, (userInfo) => userInfo.user)
  userInfo: number;

  @OneToMany(() => ListNotes, (listNotes) => listNotes.author)
  notes: ListNotes[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
