"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorCreateWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_create_nested_one_without_doctors_input_1 = require("../hospital/hospital-create-nested-one-without-doctors.input");
let HospitalToDoctorCreateWithoutDoctorInput = class HospitalToDoctorCreateWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_create_nested_one_without_doctors_input_1.HospitalCreateNestedOneWithoutDoctorsInput, { nullable: false })
], HospitalToDoctorCreateWithoutDoctorInput.prototype, "hospital", void 0);
HospitalToDoctorCreateWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorCreateWithoutDoctorInput);
exports.HospitalToDoctorCreateWithoutDoctorInput = HospitalToDoctorCreateWithoutDoctorInput;
//# sourceMappingURL=hospital-to-doctor-create-without-doctor.input.js.map