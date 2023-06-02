import { CorredorService } from './corredor.service';
import { CreateCorredorDto } from './dto/create-corredor.dto';
import { UpdateCorredorDto } from './dto/update-corredor.dto';
import { Corredor } from './entities/corredor.entity';
export declare class CorredorController {
    private readonly corredorService;
    constructor(corredorService: CorredorService);
    create(createCorredorDto: CreateCorredorDto): Corredor;
    findAll(): Corredor[];
    findOne(id: number): Corredor;
    update(id: string, updateCorredorDto: UpdateCorredorDto): Corredor;
    remove(id: string): void;
}
