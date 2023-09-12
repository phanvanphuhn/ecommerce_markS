"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchedule = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_count_aggregate_output_1 = require("./schedule-count-aggregate.output");
const schedule_avg_aggregate_output_1 = require("./schedule-avg-aggregate.output");
const schedule_sum_aggregate_output_1 = require("./schedule-sum-aggregate.output");
const schedule_min_aggregate_output_1 = require("./schedule-min-aggregate.output");
const schedule_max_aggregate_output_1 = require("./schedule-max-aggregate.output");
let AggregateSchedule = class AggregateSchedule {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_count_aggregate_output_1.ScheduleCountAggregate, { nullable: true })
], AggregateSchedule.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_avg_aggregate_output_1.ScheduleAvgAggregate, { nullable: true })
], AggregateSchedule.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_sum_aggregate_output_1.ScheduleSumAggregate, { nullable: true })
], AggregateSchedule.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_min_aggregate_output_1.ScheduleMinAggregate, { nullable: true })
], AggregateSchedule.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_max_aggregate_output_1.ScheduleMaxAggregate, { nullable: true })
], AggregateSchedule.prototype, "_max", void 0);
AggregateSchedule = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateSchedule);
exports.AggregateSchedule = AggregateSchedule;
//# sourceMappingURL=aggregate-schedule.output.js.map