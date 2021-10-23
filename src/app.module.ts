import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListNotesModule } from './list-notes/list-notes.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
      extra: {
        connectionLimit: 100,
      },
    }),
    ListNotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
