export class CreateNoteDto {
  title: string;
  description: string;
  author: number;
  tags?: Array<string>;
}
export class UpdateNoteDto {
  title: string;
  description: string;
  author: number;
  tags?: Array<string>;
}
