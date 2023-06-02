import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { CorredorModule } from './corredor/corredor.module';

@Module({
  imports: [EstudianteModule, CorredorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
