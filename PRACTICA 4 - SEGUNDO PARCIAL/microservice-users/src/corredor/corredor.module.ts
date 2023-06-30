import { Module } from '@nestjs/common';
import { CorredorService } from './corredor.service';
import { CorredorSchema } from './schema/corredor.schema';
import { CORREDOR } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { CorredorController } from './corredor.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CORREDOR.name,
        useFactory: () => CorredorSchema,
      },
    ]),
  ],
  controllers: [CorredorController],
  providers: [CorredorService],
})
export class CorredorModule {}
