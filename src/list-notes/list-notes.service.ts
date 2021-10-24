import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './dto/list-notes.dto';
import { ListNotes } from './entities/list-notes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListNotesService {
  constructor(
    @InjectRepository(ListNotes)
    private readonly listNotesRepo: Repository<ListNotes>,
  ) {}

  async getAll(): Promise<ListNotes[]> {
    const result = await this.listNotesRepo.find();
    return result;
  }

  async getOneById(notesId: number): Promise<ListNotes> {
    return this.listNotesRepo.findOne(notesId);
  }

  createNote(body: CreateNoteDto): Promise<ListNotes> {
    const result = this.listNotesRepo.create({ ...body });
    return this.listNotesRepo.save(result);
  }

  async deleteNote(notesId: number): Promise<ListNotes> {
    const note = await this.getOneById(notesId);

    if (!note) {
      throw new NotFoundException('Data Note is Not Found');
    }

    return this.listNotesRepo.remove(note);
  }

  async UpdateNote(notesId: number, body: UpdateNoteDto): Promise<ListNotes> {
    const note = await this.getOneById(notesId);
    if (!note) {
      throw new NotFoundException('Data Note is Not Found');
    }

    note.title = body.title;
    note.description = body.description;
    note.author = body.author;

    return this.listNotesRepo.save(note);
  }
}
