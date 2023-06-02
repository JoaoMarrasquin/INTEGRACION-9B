import { CreateCorredorDto } from './create-corredor.dto';
declare const UpdateCorredorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCorredorDto>>;
export declare class UpdateCorredorDto extends UpdateCorredorDto_base {
    estado?: boolean;
}
export {};
