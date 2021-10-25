import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ListNotesService } from './list-notes.service';
import { CreateNoteDto, UpdateNoteDto } from './dto/list-notes.dto';
import { BaseResponseDto } from '../common/base-response.dto';
import { ListNotes } from './entities/list-notes.entity';

@Controller('api/list-notes')
export class ListNotesController {
  constructor(private readonly listNotesService: ListNotesService) {}

  @Get()
  async getAll(): Promise<BaseResponseDto<any>> {
    const res = await this.listNotesService.getAll();
    return {
      success: true,
      statusCode: res.length ? HttpStatus.OK : HttpStatus.NO_CONTENT,
      message: res.length ? 'Get All Data List Notes' : 'Please Add New Note',
      data: res as any,
    };
  }

  @Get('/:notesId')
  async getById(
    @Param('notesId', ParseIntPipe) notesId: number,
  ): Promise<BaseResponseDto<ListNotes>> {
    const note: ListNotes = await this.listNotesService.getOneById(notesId);

    if (!note) {
      throw new NotFoundException('Data Note is Not Found');
    }

    return {
      success: true,
      statusCode: HttpStatus.OK,
      message: 'Successfully Get Note',
      data: note,
    };
  }

  @Post()
  async createNote(
    @Body() body: CreateNoteDto,
  ): Promise<BaseResponseDto<ListNotes>> {
    try {
      const res: ListNotes = await this.listNotesService.createNote(body);

      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Successfully Created Notes',
        data: res,
      };
    } catch (err) {
      return {
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: err.sqlMessage,
      };
    }
  }

  @Put('/:notesId')
  async updateNote(
    @Param('notesId', ParseIntPipe) notesId: number,
    @Body() body: UpdateNoteDto,
  ): Promise<BaseResponseDto<ListNotes>> {
    const res = await this.listNotesService.UpdateNote(notesId, body);

    return {
      success: true,
      statusCode: HttpStatus.OK,
      message: 'Successfully Updated Notes',
      data: res,
    };
  }

  @Delete('/:notesId')
  async deleteNotes(
    @Param('notesId', ParseIntPipe) notesId: number,
  ): Promise<BaseResponseDto<ListNotes>> {
    const res: ListNotes = await this.listNotesService.deleteNote(notesId);

    return {
      success: true,
      statusCode: HttpStatus.CREATED,
      message: 'Successfully Deleted Note',
      data: res,
    };
  }
}
