import { Module } from '@nestjs/common';
import { ListNotesController } from './list-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListNotes } from './entities/list-notes.entity';
import { ListNotesService } from './list-notes.service';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [TypeOrmModule.forFeature([ListNotes]), UsersModule],
  controllers: [ListNotesController],
  providers: [ListNotesService],
})
export class ListNotesModule {}
