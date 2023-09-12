"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const doctor_where_input_1 = require("./doctor-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_specialty_list_filter_input_1 = require("../prisma/enum-specialty-list-filter.input");
const enum_division_list_filter_input_1 = require("../prisma/enum-division-list-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const case_log_list_relation_filter_input_1 = require("../case-log/case-log-list-relation-filter.input");
const hospital_to_doctor_list_relation_filter_input_1 = require("../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input");
let DoctorWhereUniqueInput = class DoctorWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_where_input_1.DoctorWhereInput], { nullable: true })
], DoctorWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_where_input_1.DoctorWhereInput], { nullable: true })
], DoctorWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_where_input_1.DoctorWhereInput], { nullable: true })
], DoctorWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_specialty_list_filter_input_1.EnumSpecialtyListFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_division_list_filter_input_1.EnumDivisionListFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_list_relation_filter_input_1.CaseLogListRelationFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_list_relation_filter_input_1.HospitalToDoctorListRelationFilter, { nullable: true })
], DoctorWhereUniqueInput.prototype, "hospitals", void 0);
DoctorWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorWhereUniqueInput);
exports.DoctorWhereUniqueInput = DoctorWhereUniqueInput;
//# sourceMappingURL=doctor-where-unique.input.js.map