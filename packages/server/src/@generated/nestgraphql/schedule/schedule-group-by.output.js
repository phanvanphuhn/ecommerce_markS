"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const graphql_3 = require("@nestjs/graphql");
const schedule_count_aggregate_output_1 = require("./schedule-count-aggregate.output");
const schedule_avg_aggregate_output_1 = require("./schedule-avg-aggregate.output");
const schedule_sum_aggregate_output_1 = require("./schedule-sum-aggregate.output");
const schedule_min_aggregate_output_1 = require("./schedule-min-aggregate.output");
const schedule_max_aggregate_output_1 = require("./schedule-max-aggregate.output");
let ScheduleGroupBy = class ScheduleGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleGroupBy.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleGroupBy.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleGroupBy.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleGroupBy.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleGroupBy.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], ScheduleGroupBy.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ScheduleGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleGroupBy.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_count_aggregate_output_1.ScheduleCountAggregate, { nullable: true })
], ScheduleGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_avg_aggregate_output_1.ScheduleAvgAggregate, { nullable: true })
], ScheduleGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_sum_aggregate_output_1.ScheduleSumAggregate, { nullable: true })
], ScheduleGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_min_aggregate_output_1.ScheduleMinAggregate, { nullable: true })
], ScheduleGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_max_aggregate_output_1.ScheduleMaxAggregate, { nullable: true })
], ScheduleGroupBy.prototype, "_max", void 0);
ScheduleGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ScheduleGroupBy);
exports.ScheduleGroupBy = ScheduleGroupBy;
//# sourceMappingURL=schedule-group-by.output.js.map