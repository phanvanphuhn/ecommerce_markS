"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const case_log_unchecked_update_many_without_doctor_nested_input_1 = require("../case-log/case-log-unchecked-update-many-without-doctor-nested.input");
const hospital_to_doctor_unchecked_update_many_without_doctor_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-unchecked-update-many-without-doctor-nested.input");
let DoctorUncheckedUpdateInput = class DoctorUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_many_without_doctor_nested_input_1.CaseLogUncheckedUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_unchecked_update_many_without_doctor_nested_input_1.HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput, { nullable: true })
], DoctorUncheckedUpdateInput.prototype, "hospitals", void 0);
DoctorUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUncheckedUpdateInput);
exports.DoctorUncheckedUpdateInput = DoctorUncheckedUpdateInput;
//# sourceMappingURL=doctor-unchecked-update.input.js.map