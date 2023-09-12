"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUpdateWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_update_one_required_without_doctors_nested_input_1 = require("../hospital/hospital-update-one-required-without-doctors-nested.input");
let HospitalToDoctorUpdateWithoutDoctorInput = class HospitalToDoctorUpdateWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_update_one_required_without_doctors_nested_input_1.HospitalUpdateOneRequiredWithoutDoctorsNestedInput, { nullable: true })
], HospitalToDoctorUpdateWithoutDoctorInput.prototype, "hospital", void 0);
HospitalToDoctorUpdateWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUpdateWithoutDoctorInput);
exports.HospitalToDoctorUpdateWithoutDoctorInput = HospitalToDoctorUpdateWithoutDoctorInput;
//# sourceMappingURL=hospital-to-doctor-update-without-doctor.input.js.map