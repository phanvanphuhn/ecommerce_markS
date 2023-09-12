"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HospitalToDoctorScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
let HospitalToDoctorScalarWhereWithAggregatesInput = HospitalToDoctorScalarWhereWithAggregatesInput_1 = class HospitalToDoctorScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalToDoctorScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalToDoctorScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereWithAggregatesInput_1], { nullable: true })
], HospitalToDoctorScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], HospitalToDoctorScalarWhereWithAggregatesInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], HospitalToDoctorScalarWhereWithAggregatesInput.prototype, "doctorId", void 0);
HospitalToDoctorScalarWhereWithAggregatesInput = HospitalToDoctorScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorScalarWhereWithAggregatesInput);
exports.HospitalToDoctorScalarWhereWithAggregatesInput = HospitalToDoctorScalarWhereWithAggregatesInput;
//# sourceMappingURL=hospital-to-doctor-scalar-where-with-aggregates.input.js.map