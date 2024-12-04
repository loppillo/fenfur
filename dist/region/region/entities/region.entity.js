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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const asociacion_entity_1 = require("../../../asociacion/asociacion/entities/asociacion.entity");
const usuario_entity_1 = require("../../../usuario/usuario/usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Region = class Region {
};
exports.Region = Region;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Region.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asociacion_entity_1.Asociacion, (association) => association.region),
    __metadata("design:type", Array)
], Region.prototype, "asociaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_entity_1.User, (usuario) => usuario.region),
    __metadata("design:type", Array)
], Region.prototype, "users", void 0);
exports.Region = Region = __decorate([
    (0, typeorm_1.Entity)()
], Region);
//# sourceMappingURL=region.entity.js.map