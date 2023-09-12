"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_where_input_1 = require("./schedule-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_schedule_type_filter_input_1 = require("../prisma/enum-schedule-type-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const plan_call_relation_filter_input_1 = require("../plan-call/plan-call-relation-filter.input");
const case_log_relation_filter_input_1 = require("../case-log/case-log-relation-filter.input");
let ScheduleWhereUniqueInput = class ScheduleWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_input_1.ScheduleWhereInput], { nullable: true })
], ScheduleWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_input_1.ScheduleWhereInput], { nullable: true })
], ScheduleWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_input_1.ScheduleWhereInput], { nullable: true })
], ScheduleWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_schedule_type_filter_input_1.EnumScheduleTypeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_relation_filter_input_1.PlanCallRelationFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_relation_filter_input_1.CaseLogRelationFilter, { nullable: true })
], ScheduleWhereUniqueInput.prototype, "caseLog", void 0);
ScheduleWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleWhereUniqueInput);
exports.ScheduleWhereUniqueInput = ScheduleWhereUniqueInput;
//# sourceMappingURL=schedule-where-unique.input.js.map