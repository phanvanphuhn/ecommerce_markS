"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ScheduleScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_schedule_type_filter_input_1 = require("../prisma/enum-schedule-type-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
let ScheduleScalarWhereInput = ScheduleScalarWhereInput_1 = class ScheduleScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereInput_1], { nullable: true })
], ScheduleScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereInput_1], { nullable: true })
], ScheduleScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereInput_1], { nullable: true })
], ScheduleScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_schedule_type_filter_input_1.EnumScheduleTypeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ScheduleScalarWhereInput.prototype, "deleted", void 0);
ScheduleScalarWhereInput = ScheduleScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ScheduleScalarWhereInput);
exports.ScheduleScalarWhereInput = ScheduleScalarWhereInput;
//# sourceMappingURL=schedule-scalar-where.input.js.map