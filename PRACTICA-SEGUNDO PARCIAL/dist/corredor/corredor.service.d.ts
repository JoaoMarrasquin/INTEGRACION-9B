import { CreateCorredorDto } from './dto/create-corredor.dto';
import { UpdateCorredorDto } from './dto/update-corredor.dto';
import { Corredor } from './entities/corredor.entity';
export declare class CorredorService {
    private corredors;
    create(createCorredorDto: CreateCorredorDto): Corredor;
    findAll(): Corredor[];
    findOne(id: number): Corredor;
    update(id: number, updatecorredorDto: UpdateCorredorDto): Corredor;
    remove(id: number): void;
}
