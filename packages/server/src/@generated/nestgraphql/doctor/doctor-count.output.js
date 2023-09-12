"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCount = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let DoctorCount = class DoctorCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DoctorCount.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DoctorCount.prototype, "hospitals", void 0);
DoctorCount = __decorate([
    (0, graphql_2.ObjectType)()
], DoctorCount);
exports.DoctorCount = DoctorCount;
//# sourceMappingURL=doctor-count.output.js.map