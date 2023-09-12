"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const user_relation_filter_input_1 = require("./user-relation-filter.input");
const profile_relation_filter_input_1 = require("../profile/profile-relation-filter.input");
const schedule_list_relation_filter_input_1 = require("../schedule/schedule-list-relation-filter.input");
const case_log_list_relation_filter_input_1 = require("../case-log/case-log-list-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserWhereInput.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserWhereInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserWhereInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_relation_filter_input_1.ProfileRelationFilter, { nullable: true })
], UserWhereInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_list_relation_filter_input_1.ScheduleListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_list_relation_filter_input_1.CaseLogListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], UserWhereInput.prototype, "Doctor", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=user-where.input.js.map