import { Module } from '@nestjs/common';
import { UsersInfoService } from './users-info.service';
import { UsersInfoController } from './users-info.controller';

@Module({
  controllers: [UsersInfoController],
  providers: [UsersInfoService]
})
export class UsersInfoModule {}
