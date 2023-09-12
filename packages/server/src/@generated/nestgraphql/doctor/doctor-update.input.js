"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const user_update_one_required_without_doctor_nested_input_1 = require("../user/user-update-one-required-without-doctor-nested.input");
const case_log_update_many_without_doctor_nested_input_1 = require("../case-log/case-log-update-many-without-doctor-nested.input");
const hospital_to_doctor_update_many_without_doctor_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-update-many-without-doctor-nested.input");
let DoctorUpdateInput = class DoctorUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], DoctorUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorUpdateInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorUpdateInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_doctor_nested_input_1.UserUpdateOneRequiredWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_many_without_doctor_nested_input_1.CaseLogUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_many_without_doctor_nested_input_1.HospitalToDoctorUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUpdateInput.prototype, "hospitals", void 0);
DoctorUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUpdateInput);
exports.DoctorUpdateInput = DoctorUpdateInput;
//# sourceMappingURL=doctor-update.input.js.map