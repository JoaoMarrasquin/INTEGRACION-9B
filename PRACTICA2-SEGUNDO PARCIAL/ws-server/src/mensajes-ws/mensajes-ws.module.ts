import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { CorredorModule } from '../corredor/corredor.module';
//  'src/corredor/corredor.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[CorredorModule]
})
export class MensajesWsModule {}
