"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HospitalToDoctorScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
let HospitalToDoctorScalarWhereInput = HospitalToDoctorScalarWhereInput_1 = class HospitalToDoctorScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereInput_1], { nullable: true })
], HospitalToDoctorScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereInput_1], { nullable: true })
], HospitalToDoctorScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorScalarWhereInput_1], { nullable: true })
], HospitalToDoctorScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorScalarWhereInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorScalarWhereInput.prototype, "doctorId", void 0);
HospitalToDoctorScalarWhereInput = HospitalToDoctorScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorScalarWhereInput);
exports.HospitalToDoctorScalarWhereInput = HospitalToDoctorScalarWhereInput;
//# sourceMappingURL=hospital-to-doctor-scalar-where.input.js.map