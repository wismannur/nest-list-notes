import { User } from '../../users/entities/user.entity';

export class ListNotesDto {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
export class CreateNoteDto {
  title: string;
  description: string;
  author: User;
  tags?: Array<string>;
}
export class UpdateNoteDto {
  title: string;
  description: string;
  author: User;
  tags?: Array<string>;
}
