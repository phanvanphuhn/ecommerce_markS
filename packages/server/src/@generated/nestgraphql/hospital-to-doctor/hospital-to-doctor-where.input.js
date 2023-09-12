"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HospitalToDoctorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const hospital_relation_filter_input_1 = require("../hospital/hospital-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
let HospitalToDoctorWhereInput = HospitalToDoctorWhereInput_1 = class HospitalToDoctorWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorWhereInput_1], { nullable: true })
], HospitalToDoctorWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorWhereInput_1], { nullable: true })
], HospitalToDoctorWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalToDoctorWhereInput_1], { nullable: true })
], HospitalToDoctorWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorWhereInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorWhereInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_relation_filter_input_1.HospitalRelationFilter, { nullable: true })
], HospitalToDoctorWhereInput.prototype, "hospital", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], HospitalToDoctorWhereInput.prototype, "doctor", void 0);
HospitalToDoctorWhereInput = HospitalToDoctorWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorWhereInput);
exports.HospitalToDoctorWhereInput = HospitalToDoctorWhereInput;
//# sourceMappingURL=hospital-to-doctor-where.input.js.map