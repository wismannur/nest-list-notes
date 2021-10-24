import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseResponseDto } from 'src/common/base-response.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserInfo } from './entities/user-info.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserInfo)
    private readonly userInfoRepo: Repository<UserInfo>,
  ) {}

  async checkUser(email: string | number) {
    const user = await this.userRepo
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email.toString() })
      .getOne();

    return user;
  }

  async create(body: CreateUserDto) {
    const checkUser = await this.checkUser(body.email);
    if (checkUser) {
      throw new ConflictException('Email is Already Exist.!');
    }

    const user = this.userRepo.create(body);
    const userResult = await this.userRepo.save(user);

    const userInfo = this.userInfoRepo.create({
      user,
    });
    await this.userInfoRepo.save(userInfo);

    return userResult;
  }

  async findAll(): Promise<BaseResponseDto<User[]>> {
    const res = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.userInfo', 'user_info.user')
      // .where('user.id = :id', { id: 1 })
      .getMany();

    return {
      success: true,
      // statusCode: res.length ? HttpStatus.OK : HttpStatus.NO_CONTENT,
      // message: res.length ? 'Get All Data Users' : 'Please Add New User',
      data: res,
    };
  }

  findOne(id: number): Promise<User> {
    return this.userRepo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
