import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CorredorDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    peso:string;
    

    @IsString()
    @IsNotEmpty()
    altura:string;

    @IsString()
    @IsNotEmpty()
    edad:string;
}
