"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUpdateWithoutHospitalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_update_one_required_without_hospitals_nested_input_1 = require("../doctor/doctor-update-one-required-without-hospitals-nested.input");
let HospitalToDoctorUpdateWithoutHospitalInput = class HospitalToDoctorUpdateWithoutHospitalInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_update_one_required_without_hospitals_nested_input_1.DoctorUpdateOneRequiredWithoutHospitalsNestedInput, { nullable: true })
], HospitalToDoctorUpdateWithoutHospitalInput.prototype, "doctor", void 0);
HospitalToDoctorUpdateWithoutHospitalInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUpdateWithoutHospitalInput);
exports.HospitalToDoctorUpdateWithoutHospitalInput = HospitalToDoctorUpdateWithoutHospitalInput;
//# sourceMappingURL=hospital-to-doctor-update-without-hospital.input.js.map