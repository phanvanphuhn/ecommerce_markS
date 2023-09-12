"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const schedule_count_order_by_aggregate_input_1 = require("./schedule-count-order-by-aggregate.input");
const schedule_avg_order_by_aggregate_input_1 = require("./schedule-avg-order-by-aggregate.input");
const schedule_max_order_by_aggregate_input_1 = require("./schedule-max-order-by-aggregate.input");
const schedule_min_order_by_aggregate_input_1 = require("./schedule-min-order-by-aggregate.input");
const schedule_sum_order_by_aggregate_input_1 = require("./schedule-sum-order-by-aggregate.input");
let ScheduleOrderByWithAggregationInput = class ScheduleOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_count_order_by_aggregate_input_1.ScheduleCountOrderByAggregateInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_avg_order_by_aggregate_input_1.ScheduleAvgOrderByAggregateInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_max_order_by_aggregate_input_1.ScheduleMaxOrderByAggregateInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_min_order_by_aggregate_input_1.ScheduleMinOrderByAggregateInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_sum_order_by_aggregate_input_1.ScheduleSumOrderByAggregateInput, { nullable: true })
], ScheduleOrderByWithAggregationInput.prototype, "_sum", void 0);
ScheduleOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleOrderByWithAggregationInput);
exports.ScheduleOrderByWithAggregationInput = ScheduleOrderByWithAggregationInput;
//# sourceMappingURL=schedule-order-by-with-aggregation.input.js.map