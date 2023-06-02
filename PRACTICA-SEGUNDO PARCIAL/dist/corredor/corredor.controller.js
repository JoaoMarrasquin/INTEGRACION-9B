"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorredorController = void 0;
const common_1 = require("@nestjs/common");
const corredor_service_1 = require("./corredor.service");
const create_corredor_dto_1 = require("./dto/create-corredor.dto");
const update_corredor_dto_1 = require("./dto/update-corredor.dto");
let CorredorController = class CorredorController {
    constructor(corredorService) {
        this.corredorService = corredorService;
    }
    create(createCorredorDto) {
        return this.corredorService.create(createCorredorDto);
    }
    findAll() {
        return this.corredorService.findAll();
    }
    findOne(id) {
        return this.corredorService.findOne(id);
    }
    update(id, updateCorredorDto) {
        return this.corredorService.update(+id, updateCorredorDto);
    }
    remove(id) {
        return this.corredorService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_corredor_dto_1.CreateCorredorDto]),
    __metadata("design:returntype", void 0)
], CorredorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CorredorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CorredorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_corredor_dto_1.UpdateCorredorDto]),
    __metadata("design:returntype", void 0)
], CorredorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorredorController.prototype, "remove", null);
CorredorController = __decorate([
    (0, common_1.Controller)('corredor'),
    __metadata("design:paramtypes", [corredor_service_1.CorredorService])
], CorredorController);
exports.CorredorController = CorredorController;
//# sourceMappingURL=corredor.controller.js.map