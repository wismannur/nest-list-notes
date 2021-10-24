import { User } from '../../users/entities/user.entity';

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
