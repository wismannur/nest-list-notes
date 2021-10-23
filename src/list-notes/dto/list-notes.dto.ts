export class CreateNoteDto {
  title: string;
  description: string;
  author: string;
  tags?: Array<string>;
}

export class UpdateNoteDto {
  title: string;
  description: string;
  author: string;
  tags?: Array<string>;
}
