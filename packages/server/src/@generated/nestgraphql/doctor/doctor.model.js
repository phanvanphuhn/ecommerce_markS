"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const user_model_1 = require("../user/user.model");
const case_log_model_1 = require("../case-log/case-log.model");
const hospital_to_doctor_model_1 = require("../hospital-to-doctor/hospital-to-doctor.model");
const doctor_count_output_1 = require("./doctor-count.output");
let Doctor = class Doctor {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Doctor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Doctor.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Doctor.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], Doctor.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], Doctor.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], Doctor.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_model_1.CaseLog], { nullable: true })
], Doctor.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_model_1.HospitalToDoctor], { nullable: true })
], Doctor.prototype, "hospitals", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_count_output_1.DoctorCount, { nullable: false })
], Doctor.prototype, "_count", void 0);
Doctor = __decorate([
    (0, graphql_2.ObjectType)()
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.model.js.map