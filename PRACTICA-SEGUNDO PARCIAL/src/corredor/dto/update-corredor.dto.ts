import { PartialType } from '@nestjs/mapped-types';
import { CreateCorredorDto } from './create-corredor.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCorredorDto extends PartialType(CreateCorredorDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
