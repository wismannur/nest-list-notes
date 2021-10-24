import { Test, TestingModule } from '@nestjs/testing';
import { UsersInfoController } from './users-info.controller';
import { UsersInfoService } from './users-info.service';

describe('UsersInfoController', () => {
  let controller: UsersInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersInfoController],
      providers: [UsersInfoService],
    }).compile();

    controller = module.get<UsersInfoController>(UsersInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
