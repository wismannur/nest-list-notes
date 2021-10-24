import {
  ConflictException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    if (body.username.length < 6) {
      throw new NotAcceptableException('Min Length username is 6 Characters.!');
    }

    const checkUser = await this.usersRepo
      .createQueryBuilder('user')
      .where('user.username = :username', { username: body.username })
      .getOne();

    if (checkUser) {
      throw new ConflictException('Username is Already Exist.!');
    }

    const user = this.usersRepo.create(body);
    return this.usersRepo.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number): Promise<User> {
    return this.usersRepo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
