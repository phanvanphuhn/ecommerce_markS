"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DoctorScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const enum_specialty_list_filter_input_1 = require("../prisma/enum-specialty-list-filter.input");
const enum_division_list_filter_input_1 = require("../prisma/enum-division-list-filter.input");
let DoctorScalarWhereWithAggregatesInput = DoctorScalarWhereWithAggregatesInput_1 = class DoctorScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_specialty_list_filter_input_1.EnumSpecialtyListFilter, { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_division_list_filter_input_1.EnumDivisionListFilter, { nullable: true })
], DoctorScalarWhereWithAggregatesInput.prototype, "divisions", void 0);
DoctorScalarWhereWithAggregatesInput = DoctorScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DoctorScalarWhereWithAggregatesInput);
exports.DoctorScalarWhereWithAggregatesInput = DoctorScalarWhereWithAggregatesInput;
//# sourceMappingURL=doctor-scalar-where-with-aggregates.input.js.map