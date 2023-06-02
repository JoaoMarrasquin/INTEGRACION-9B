import { Test, TestingModule } from '@nestjs/testing';
import { CorredorController } from './corredor.controller';
import { CorredorService } from './corredor.service';

describe('CorredorController', () => {
  let controller: CorredorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorredorController],
      providers: [CorredorService],
    }).compile();

    controller = module.get<CorredorController>(CorredorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
