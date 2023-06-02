import { Module } from '@nestjs/common';
import { CorredorService } from './corredor.service';
import { CorredorController } from './corredor.controller';

@Module({
  controllers: [CorredorController],
  providers: [CorredorService]
})
export class CorredorModule {}
