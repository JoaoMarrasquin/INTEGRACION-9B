import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CorredorMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { CorredorDTO } from './dto/corredor.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { ICorredor } from 'src/common/interfaces/corredor.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('corredors')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/corredor')
export class CorredorController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyCorredor = this.clientProxy.clientProxyCorredors();

  @Post()
  create(@Body() corredorDTO: CorredorDTO): Observable<ICorredor> {
    return this._clientProxyCorredor.send(CorredorMSG.CREATE, corredorDTO);
  }

  @Get()
  findAll(): Observable<ICorredor[]> {
    return this._clientProxyCorredor.send(CorredorMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICorredor> {
    return this._clientProxyCorredor.send(CorredorMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() corredorDTO: CorredorDTO): Observable<ICorredor> {
    return this._clientProxyCorredor.send(CorredorMSG.UPDATE, { id, corredorDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyCorredor.send(CorredorMSG.DELETE, id);
  }
}
