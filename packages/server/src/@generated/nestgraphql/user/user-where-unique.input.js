"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const user_relation_filter_input_1 = require("./user-relation-filter.input");
const profile_relation_filter_input_1 = require("../profile/profile-relation-filter.input");
const schedule_list_relation_filter_input_1 = require("../schedule/schedule-list-relation-filter.input");
const case_log_list_relation_filter_input_1 = require("../case-log/case-log-list-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserWhereUniqueInput.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_relation_filter_input_1.ProfileRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_list_relation_filter_input_1.ScheduleListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_list_relation_filter_input_1.CaseLogListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "Doctor", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
//# sourceMappingURL=user-where-unique.input.js.map