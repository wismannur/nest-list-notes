import { Test, TestingModule } from '@nestjs/testing';
import { ListNotesService } from './list-notes.service';

describe('ListNotesService', () => {
  let service: ListNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListNotesService],
    }).compile();

    service = module.get<ListNotesService>(ListNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
