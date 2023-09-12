"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_create_nested_one_without_doctors_input_1 = require("../hospital/hospital-create-nested-one-without-doctors.input");
const doctor_create_nested_one_without_hospitals_input_1 = require("../doctor/doctor-create-nested-one-without-hospitals.input");
let HospitalToDoctorCreateInput = class HospitalToDoctorCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_create_nested_one_without_doctors_input_1.HospitalCreateNestedOneWithoutDoctorsInput, { nullable: false })
], HospitalToDoctorCreateInput.prototype, "hospital", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_nested_one_without_hospitals_input_1.DoctorCreateNestedOneWithoutHospitalsInput, { nullable: false })
], HospitalToDoctorCreateInput.prototype, "doctor", void 0);
HospitalToDoctorCreateInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorCreateInput);
exports.HospitalToDoctorCreateInput = HospitalToDoctorCreateInput;
//# sourceMappingURL=hospital-to-doctor-create.input.js.map