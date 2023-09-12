"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DoctorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_specialty_list_filter_input_1 = require("../prisma/enum-specialty-list-filter.input");
const enum_division_list_filter_input_1 = require("../prisma/enum-division-list-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const case_log_list_relation_filter_input_1 = require("../case-log/case-log-list-relation-filter.input");
const hospital_to_doctor_list_relation_filter_input_1 = require("../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input");
let DoctorWhereInput = DoctorWhereInput_1 = class DoctorWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DoctorWhereInput_1], { nullable: true })
], DoctorWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DoctorWhereInput_1], { nullable: true })
], DoctorWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DoctorWhereInput_1], { nullable: true })
], DoctorWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DoctorWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], DoctorWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DoctorWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_specialty_list_filter_input_1.EnumSpecialtyListFilter, { nullable: true })
], DoctorWhereInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_division_list_filter_input_1.EnumDivisionListFilter, { nullable: true })
], DoctorWhereInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], DoctorWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_list_relation_filter_input_1.CaseLogListRelationFilter, { nullable: true })
], DoctorWhereInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_list_relation_filter_input_1.HospitalToDoctorListRelationFilter, { nullable: true })
], DoctorWhereInput.prototype, "hospitals", void 0);
DoctorWhereInput = DoctorWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DoctorWhereInput);
exports.DoctorWhereInput = DoctorWhereInput;
//# sourceMappingURL=doctor-where.input.js.map