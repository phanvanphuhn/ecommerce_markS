"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PlanCallWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const schedule_relation_filter_input_1 = require("../schedule/schedule-relation-filter.input");
let PlanCallWhereInput = PlanCallWhereInput_1 = class PlanCallWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PlanCallWhereInput_1], { nullable: true })
], PlanCallWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PlanCallWhereInput_1], { nullable: true })
], PlanCallWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PlanCallWhereInput_1], { nullable: true })
], PlanCallWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PlanCallWhereInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PlanCallWhereInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_relation_filter_input_1.ScheduleRelationFilter, { nullable: true })
], PlanCallWhereInput.prototype, "schedule", void 0);
PlanCallWhereInput = PlanCallWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PlanCallWhereInput);
exports.PlanCallWhereInput = PlanCallWhereInput;
//# sourceMappingURL=plan-call-where.input.js.map