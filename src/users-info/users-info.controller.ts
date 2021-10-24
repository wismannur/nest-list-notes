import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersInfoService } from './users-info.service';
import { CreateUsersInfoDto } from './dto/create-users-info.dto';
import { UpdateUsersInfoDto } from './dto/update-users-info.dto';

@Controller('users-info')
export class UsersInfoController {
  constructor(private readonly usersInfoService: UsersInfoService) {}

  @Post()
  create(@Body() createUsersInfoDto: CreateUsersInfoDto) {
    return this.usersInfoService.create(createUsersInfoDto);
  }

  @Get()
  findAll() {
    return this.usersInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersInfoDto: UpdateUsersInfoDto) {
    return this.usersInfoService.update(+id, updateUsersInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersInfoService.remove(+id);
  }
}
