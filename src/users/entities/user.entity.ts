import { ListNotes } from 'src/list-notes/entities/list-notes.entity';
import { UsersInfo } from 'src/users-info/entities/users-info.entity';
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
  username: string;

  @Column()
  password: string;

  @OneToOne(() => UsersInfo, (usersInfo) => usersInfo.userId)
  usersInfo: number;

  @OneToMany(() => ListNotes, (listNotes) => listNotes.author)
  notes: ListNotes[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
