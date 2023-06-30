import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { CorredorController } from './corredor.controller';

@Module({
  imports: [ProxyModule],
  controllers: [CorredorController],
})
export class CorredorModule {}
