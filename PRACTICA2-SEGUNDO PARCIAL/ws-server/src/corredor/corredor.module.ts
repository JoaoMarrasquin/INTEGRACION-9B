import { Module } from '@nestjs/common';
import { CorredorService } from './corredor.service';
import { CorredorController } from './corredor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredor } from './entities/corredor.entity';


@Module({
  controllers: [CorredorController],
  providers: [CorredorService],
  imports:[ TypeOrmModule.forFeature([
    Corredor
  ]) ],
  exports:[ CorredorService, TypeOrmModule ]
})
export class CorredorModule {}
