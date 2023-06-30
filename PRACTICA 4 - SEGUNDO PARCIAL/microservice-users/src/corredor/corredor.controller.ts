import { CorredorService } from './corredor.service';
import { CorredorDTO } from './dto/corredor.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CorredorMsg } from 'src/common/constants';

@Controller()
export class CorredorController {
  constructor(private readonly corredorService: CorredorService) {}

  @MessagePattern(CorredorMsg.CREATE)
  create(@Payload() corredorDTO: CorredorDTO) {
    return this.corredorService.create(corredorDTO);
  }

  @MessagePattern(CorredorMsg.FIND_ALL)
  findAll() {
    return this.corredorService.findAll();
  }

  @MessagePattern(CorredorMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.corredorService.findOne(id);
  }
  @MessagePattern(CorredorMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.corredorService.update(payload.id, payload.corredorDTO);
  }

  @MessagePattern(CorredorMsg.DELETE)
  delete(@Payload() id: string) {
    return this.corredorService.delete(id);
  }
}
