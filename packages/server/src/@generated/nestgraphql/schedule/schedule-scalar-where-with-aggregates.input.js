"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ScheduleScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const enum_schedule_type_with_aggregates_filter_input_1 = require("../prisma/enum-schedule-type-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
let ScheduleScalarWhereWithAggregatesInput = ScheduleScalarWhereWithAggregatesInput_1 = class ScheduleScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereWithAggregatesInput_1], { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereWithAggregatesInput_1], { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ScheduleScalarWhereWithAggregatesInput_1], { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_schedule_type_with_aggregates_filter_input_1.EnumScheduleTypeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ScheduleScalarWhereWithAggregatesInput.prototype, "deleted", void 0);
ScheduleScalarWhereWithAggregatesInput = ScheduleScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ScheduleScalarWhereWithAggregatesInput);
exports.ScheduleScalarWhereWithAggregatesInput = ScheduleScalarWhereWithAggregatesInput;
//# sourceMappingURL=schedule-scalar-where-with-aggregates.input.js.map