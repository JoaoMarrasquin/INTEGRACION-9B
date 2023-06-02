import { IsNotEmpty, IsString } from "class-validator";

export class CreateCorredorDto {
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
