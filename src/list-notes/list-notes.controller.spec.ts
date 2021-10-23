import { Test, TestingModule } from '@nestjs/testing';
import { ListNotesController } from './list-notes.controller';

describe('ListNotesController', () => {
  let controller: ListNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListNotesController],
    }).compile();

    controller = module.get<ListNotesController>(ListNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
