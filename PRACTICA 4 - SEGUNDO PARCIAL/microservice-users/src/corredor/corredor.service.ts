import { CorredorDTO } from './dto/corredor.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CORREDOR } from 'src/common/models/models';
import { ICorredor } from 'src/common/interfaces/corredor.interface';

@Injectable()
export class CorredorService {
  constructor(@InjectModel(CORREDOR.name) private readonly model: Model<ICorredor>) {}

  
  async create(corredorDTO: CorredorDTO): Promise<ICorredor> {
    const newCorredor = new this.model(corredorDTO);
    return await newCorredor.save();
  }

  async findAll(): Promise<ICorredor[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ICorredor> {
    return await this.model.findById(id);
  }

  async update(id: string, corredorDTO: CorredorDTO): Promise<ICorredor> {
    return await this.model.findByIdAndUpdate(id, corredorDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
