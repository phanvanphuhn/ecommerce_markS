"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const case_log_update_many_without_doctor_nested_input_1 = require("../case-log/case-log-update-many-without-doctor-nested.input");
const hospital_to_doctor_update_many_without_doctor_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-update-many-without-doctor-nested.input");
let DoctorUpdateWithoutUserInput = class DoctorUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], DoctorUpdateWithoutUserInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorUpdateWithoutUserInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorUpdateWithoutUserInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_many_without_doctor_nested_input_1.CaseLogUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateWithoutUserInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_many_without_doctor_nested_input_1.HospitalToDoctorUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateWithoutUserInput.prototype, "hospitals", void 0);
DoctorUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUpdateWithoutUserInput);
exports.DoctorUpdateWithoutUserInput = DoctorUpdateWithoutUserInput;
//# sourceMappingURL=doctor-update-without-user.input.js.map