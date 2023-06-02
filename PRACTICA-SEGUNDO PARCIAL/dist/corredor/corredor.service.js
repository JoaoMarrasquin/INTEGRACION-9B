"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorredorService = void 0;
const common_1 = require("@nestjs/common");
const corredor_entity_1 = require("./entities/corredor.entity");
let CorredorService = class CorredorService {
    constructor() {
        this.corredors = [
            { id: 1, peso: '60kg', nombre: 'Joao', altura: '1,60mts', edad: '22', estado: true },
            { id: 2, peso: '50kg', nombre: 'Bryan', altura: '2,00mts', edad: '22', estado: true },
        ];
    }
    create(createCorredorDto) {
        const corredor = new corredor_entity_1.Corredor();
        corredor.id = Math.max(...this.corredors.map(elemento => elemento.id), 0) + 1;
        corredor.nombre = createCorredorDto.nombre;
        corredor.altura = createCorredorDto.altura;
        corredor.edad = createCorredorDto.edad;
        corredor.peso = createCorredorDto.peso;
        this.corredors.push(corredor);
        return corredor;
    }
    findAll() {
        return this.corredors;
    }
    findOne(id) {
        const corredor = this.corredors.find(corredor => corredor.id === id);
        if (!corredor)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return corredor;
    }
    update(id, updatecorredorDto) {
        const { peso, nombre, altura, edad, estado } = updatecorredorDto;
        const corredor = this.findOne(id);
        if (nombre)
            corredor.nombre = nombre;
        if (altura)
            corredor.altura = altura;
        if (edad)
            corredor.edad = edad;
        if (estado != undefined)
            corredor.estado = estado;
        this.corredors = this.corredors.map(elemento => {
            if (elemento.id === id)
                return corredor;
            return elemento;
        });
        return corredor;
    }
    remove(id) {
        this.findOne(id);
        this.corredors = this.corredors.filter(elemento => elemento.id !== id);
    }
};
CorredorService = __decorate([
    (0, common_1.Injectable)()
], CorredorService);
exports.CorredorService = CorredorService;
//# sourceMappingURL=corredor.service.js.map