"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_hospital_id_doctor_id_compound_unique_input_1 = require("./hospital-to-doctor-hospital-id-doctor-id-compound-unique.input");
const hospital_to_doctor_where_input_1 = require("./hospital-to-doctor-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const hospital_relation_filter_input_1 = require("../hospital/hospital-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
let HospitalToDoctorWhereUniqueInput = class HospitalToDoctorWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_hospital_id_doctor_id_compound_unique_input_1.HospitalToDoctorHospitalIdDoctorIdCompoundUniqueInput, { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "hospitalId_doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput], { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput], { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput], { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_relation_filter_input_1.HospitalRelationFilter, { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "hospital", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], HospitalToDoctorWhereUniqueInput.prototype, "doctor", void 0);
HospitalToDoctorWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorWhereUniqueInput);
exports.HospitalToDoctorWhereUniqueInput = HospitalToDoctorWhereUniqueInput;
//# sourceMappingURL=hospital-to-doctor-where-unique.input.js.map