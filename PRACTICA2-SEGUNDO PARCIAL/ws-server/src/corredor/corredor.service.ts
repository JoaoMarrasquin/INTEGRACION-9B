import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCorredorDto } from './dto/create-corredor.dto';
import { UpdateCorredorDto } from './dto/update-corredor.dto';
import { Corredor } from './entities/corredor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CorredorService {
  private readonly logger = new Logger('CorredorService');

  constructor( 
    @InjectRepository(Corredor) 
    private readonly corredorRepository: Repository<Corredor>,

    ){}

  
  async create(createCorredorDto: CreateCorredorDto) {
    try {
      const corredor =  this.corredorRepository.create(createCorredorDto);
      await this.corredorRepository.save(corredor);
      return corredor;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.corredorRepository.find({});
  }

  async findOne(id: string) {
    const corredor= await  this.corredorRepository.findOneBy ({ id });
    if (!corredor)
      throw new NotFoundException(`Corredor ${id} no encontrado`);
    return corredor;

  }

  async update(id: string, updateCorredorDto: UpdateCorredorDto) {
    const corredor = await this.corredorRepository.preload({
      id: id,
      ...updateCorredorDto
    });
    if (!corredor) throw new NotFoundException(`Corredor ${id} no encontrado`)

    try {
      await  this.corredorRepository.save(corredor)
      return corredor;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const corredor = await this.findOne(id);
    await this.corredorRepository.remove(corredor);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
