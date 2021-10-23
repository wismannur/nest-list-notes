import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './dto/list-notes.dto';
import { ListNotes } from './entities/list-notes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListNotesService {
  constructor(
    @InjectRepository(ListNotes)
    private readonly listNotes: Repository<ListNotes>,
  ) {}

  async getAll(): Promise<ListNotes[]> {
    const result = await this.listNotes.find();
    return result;
  }

  async getOneById(notesId: number): Promise<ListNotes> {
    let note: Promise<ListNotes>;
    try {
      note = this.listNotes.findOne(notesId);
      return note;
    } catch (err) {
      return note;
    }
  }

  createNote(body: CreateNoteDto): Promise<ListNotes> {
    const result = this.listNotes.create({ ...body });
    return this.listNotes.save(result);
  }

  async deleteNote(notesId: number): Promise<ListNotes> {
    const note = await this.getOneById(notesId);

    if (!note) {
      throw new NotFoundException('Data Note is Not Found');
    }

    return this.listNotes.remove(note);
  }

  async UpdateNote(notesId: number, body: UpdateNoteDto): Promise<ListNotes> {
    const note = await this.getOneById(notesId);
    if (!note) {
      throw new NotFoundException('Data Note is Not Found');
    }

    note.title = body.title;
    note.description = body.description;
    note.author = body.author;

    return this.listNotes.save(note);
  }
}
