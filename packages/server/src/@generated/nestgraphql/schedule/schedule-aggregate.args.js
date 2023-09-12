"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_where_input_1 = require("./schedule-where.input");
const class_transformer_1 = require("class-transformer");
const schedule_order_by_with_relation_input_1 = require("./schedule-order-by-with-relation.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const schedule_count_aggregate_input_1 = require("./schedule-count-aggregate.input");
const schedule_avg_aggregate_input_1 = require("./schedule-avg-aggregate.input");
const schedule_sum_aggregate_input_1 = require("./schedule-sum-aggregate.input");
const schedule_min_aggregate_input_1 = require("./schedule-min-aggregate.input");
const schedule_max_aggregate_input_1 = require("./schedule-max-aggregate.input");
let ScheduleAggregateArgs = class ScheduleAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_where_input_1.ScheduleWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_input_1.ScheduleWhereInput)
], ScheduleAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_order_by_with_relation_input_1.ScheduleOrderByWithRelationInput], { nullable: true })
], ScheduleAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ScheduleAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ScheduleAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_count_aggregate_input_1.ScheduleCountAggregateInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_avg_aggregate_input_1.ScheduleAvgAggregateInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_sum_aggregate_input_1.ScheduleSumAggregateInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_min_aggregate_input_1.ScheduleMinAggregateInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_max_aggregate_input_1.ScheduleMaxAggregateInput, { nullable: true })
], ScheduleAggregateArgs.prototype, "_max", void 0);
ScheduleAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ScheduleAggregateArgs);
exports.ScheduleAggregateArgs = ScheduleAggregateArgs;
//# sourceMappingURL=schedule-aggregate.args.js.map