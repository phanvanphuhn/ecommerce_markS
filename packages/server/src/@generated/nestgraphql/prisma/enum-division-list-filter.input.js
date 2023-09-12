"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDivisionListFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const division_enum_1 = require("./division.enum");
let EnumDivisionListFilter = class EnumDivisionListFilter {
};
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], EnumDivisionListFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => division_enum_1.Division, { nullable: true })
], EnumDivisionListFilter.prototype, "has", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], EnumDivisionListFilter.prototype, "hasEvery", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], EnumDivisionListFilter.prototype, "hasSome", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EnumDivisionListFilter.prototype, "isEmpty", void 0);
EnumDivisionListFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumDivisionListFilter);
exports.EnumDivisionListFilter = EnumDivisionListFilter;
//# sourceMappingURL=enum-division-list-filter.input.js.map