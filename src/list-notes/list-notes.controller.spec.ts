import { Test, TestingModule } from '@nestjs/testing';
import { ListNotesController } from './list-notes.controller';
import { ListNotesService } from './list-notes.service';

describe('ListNotesController', () => {
  let controller: ListNotesController;
  let provider: ListNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListNotesController],
      providers: [ListNotesService],
    }).compile();

    controller = module.get<ListNotesController>(ListNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(provider).toBeDefined();
  });
});
