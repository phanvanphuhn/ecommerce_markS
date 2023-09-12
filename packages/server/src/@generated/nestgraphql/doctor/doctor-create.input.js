"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const user_create_nested_one_without_doctor_input_1 = require("../user/user-create-nested-one-without-doctor.input");
const case_log_create_nested_many_without_doctor_input_1 = require("../case-log/case-log-create-nested-many-without-doctor.input");
const hospital_to_doctor_create_nested_many_without_doctor_input_1 = require("../hospital-to-doctor/hospital-to-doctor-create-nested-many-without-doctor.input");
let DoctorCreateInput = class DoctorCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], DoctorCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorCreateInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorCreateInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_doctor_input_1.UserCreateNestedOneWithoutDoctorInput, { nullable: false })
], DoctorCreateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_many_without_doctor_input_1.CaseLogCreateNestedManyWithoutDoctorInput, { nullable: true })
], DoctorCreateInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_create_nested_many_without_doctor_input_1.HospitalToDoctorCreateNestedManyWithoutDoctorInput, { nullable: true })
], DoctorCreateInput.prototype, "hospitals", void 0);
DoctorCreateInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorCreateInput);
exports.DoctorCreateInput = DoctorCreateInput;
//# sourceMappingURL=doctor-create.input.js.map