"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const user_update_one_required_without_doctor_nested_input_1 = require("../user/user-update-one-required-without-doctor-nested.input");
const hospital_to_doctor_update_many_without_doctor_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-update-many-without-doctor-nested.input");
let DoctorUpdateWithoutCaseLogInput = class DoctorUpdateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], DoctorUpdateWithoutCaseLogInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorUpdateWithoutCaseLogInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorUpdateWithoutCaseLogInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_doctor_nested_input_1.UserUpdateOneRequiredWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateWithoutCaseLogInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_many_without_doctor_nested_input_1.HospitalToDoctorUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateWithoutCaseLogInput.prototype, "hospitals", void 0);
DoctorUpdateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUpdateWithoutCaseLogInput);
exports.DoctorUpdateWithoutCaseLogInput = DoctorUpdateWithoutCaseLogInput;
//# sourceMappingURL=doctor-update-without-case-log.input.js.map