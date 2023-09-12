"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_where_input_1 = require("./plan-call-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const schedule_relation_filter_input_1 = require("../schedule/schedule-relation-filter.input");
let PlanCallWhereUniqueInput = class PlanCallWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_where_input_1.PlanCallWhereInput], { nullable: true })
], PlanCallWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_where_input_1.PlanCallWhereInput], { nullable: true })
], PlanCallWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_where_input_1.PlanCallWhereInput], { nullable: true })
], PlanCallWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_relation_filter_input_1.ScheduleRelationFilter, { nullable: true })
], PlanCallWhereUniqueInput.prototype, "schedule", void 0);
PlanCallWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallWhereUniqueInput);
exports.PlanCallWhereUniqueInput = PlanCallWhereUniqueInput;
//# sourceMappingURL=plan-call-where-unique.input.js.map