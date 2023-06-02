import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CorredorService } from './corredor.service';
import { CreateCorredorDto } from './dto/create-corredor.dto';
import { UpdateCorredorDto } from './dto/update-corredor.dto';
import { Corredor } from './entities/corredor.entity';

@Controller('corredor')
export class CorredorController {
  constructor(private readonly corredorService: CorredorService) {}

  @Post()
  create(@Body() createCorredorDto: CreateCorredorDto) {
    return this.corredorService.create(createCorredorDto);
  }

  @Get()
  findAll() : Corredor[] {
    return this.corredorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.corredorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorredorDto: UpdateCorredorDto) {
    return this.corredorService.update(+id, updateCorredorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corredorService.remove(+id);
  }
}
