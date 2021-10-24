import { Injectable } from '@nestjs/common';
import { CreateUsersInfoDto } from './dto/create-users-info.dto';
import { UpdateUsersInfoDto } from './dto/update-users-info.dto';

@Injectable()
export class UsersInfoService {
  create(createUsersInfoDto: CreateUsersInfoDto) {
    return 'This action adds a new usersInfo';
  }

  findAll() {
    return `This action returns all usersInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersInfo`;
  }

  update(id: number, updateUsersInfoDto: UpdateUsersInfoDto) {
    return `This action updates a #${id} usersInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersInfo`;
  }
}
