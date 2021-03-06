import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListNotesModule } from './list-notes/list-notes.module';
import { UsersModule } from './users/users.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, ListNotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
