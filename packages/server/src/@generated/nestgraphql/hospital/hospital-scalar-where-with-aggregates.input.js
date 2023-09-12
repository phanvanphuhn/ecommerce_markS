"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HospitalScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
let HospitalScalarWhereWithAggregatesInput = HospitalScalarWhereWithAggregatesInput_1 = class HospitalScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [HospitalScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], HospitalScalarWhereWithAggregatesInput.prototype, "address", void 0);
HospitalScalarWhereWithAggregatesInput = HospitalScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], HospitalScalarWhereWithAggregatesInput);
exports.HospitalScalarWhereWithAggregatesInput = HospitalScalarWhereWithAggregatesInput;
//# sourceMappingURL=hospital-scalar-where-with-aggregates.input.js.map