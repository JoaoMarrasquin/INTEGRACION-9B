import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCorredorDto } from './dto/create-corredor.dto';
import { UpdateCorredorDto } from './dto/update-corredor.dto';
import { Corredor } from './entities/corredor.entity';

@Injectable()
export class CorredorService {
  private corredors: Corredor[]=[
    {id:1, peso:'60kg' , nombre:'Joao', altura:'1,60mts',edad:'22',  estado:true},
    {id:2, peso:'50kg' , nombre:'Bryan', altura:'2,00mts',edad:'22',  estado:true},
  ]

  create(createCorredorDto: CreateCorredorDto) {
    const corredor = new Corredor();
    corredor.id=  Math.max( ... this.corredors.map(elemento => elemento.id),0 )+1 ;
    corredor.nombre= createCorredorDto.nombre;
    corredor.altura= createCorredorDto.altura;
    corredor.edad= createCorredorDto.edad;
    corredor.peso= createCorredorDto.peso;
    this.corredors.push(corredor);
    return corredor;
  }

  findAll() : Corredor[] {
    return this.corredors;
  }

  findOne(id: number) {
    const corredor =  this.corredors.find(corredor=> corredor.id===id);
    if (!corredor) throw new NotFoundException(`ID ${id} not found`)
    return corredor;
  }

  update(id: number, updatecorredorDto: UpdateCorredorDto) {
    const { peso, nombre, altura, edad, estado   } = updatecorredorDto;
    const corredor = this.findOne(id);
    if (nombre) corredor.nombre= nombre;
    if (altura) corredor.altura= altura;
    if (edad) corredor.edad= edad;
    if (estado!= undefined) corredor.estado= estado;

    this.corredors =  this.corredors.map( elemento=> {
      if (elemento.id===id) return corredor;
      return elemento;
    } )

    return corredor;

  }

  remove(id: number) {
    this.findOne(id);
    this.corredors =  this.corredors.filter(elemento=> elemento.id!== id);
  }
}
