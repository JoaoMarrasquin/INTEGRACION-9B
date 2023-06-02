import { Test, TestingModule } from '@nestjs/testing';
import { CorredorService } from './corredor.service';

describe('CorredorService', () => {
  let service: CorredorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorredorService],
    }).compile();

    service = module.get<CorredorService>(CorredorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
