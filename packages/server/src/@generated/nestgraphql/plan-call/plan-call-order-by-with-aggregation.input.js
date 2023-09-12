"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const plan_call_count_order_by_aggregate_input_1 = require("./plan-call-count-order-by-aggregate.input");
const plan_call_max_order_by_aggregate_input_1 = require("./plan-call-max-order-by-aggregate.input");
const plan_call_min_order_by_aggregate_input_1 = require("./plan-call-min-order-by-aggregate.input");
let PlanCallOrderByWithAggregationInput = class PlanCallOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_count_order_by_aggregate_input_1.PlanCallCountOrderByAggregateInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_max_order_by_aggregate_input_1.PlanCallMaxOrderByAggregateInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_min_order_by_aggregate_input_1.PlanCallMinOrderByAggregateInput, { nullable: true })
], PlanCallOrderByWithAggregationInput.prototype, "_min", void 0);
PlanCallOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallOrderByWithAggregationInput);
exports.PlanCallOrderByWithAggregationInput = PlanCallOrderByWithAggregationInput;
//# sourceMappingURL=plan-call-order-by-with-aggregation.input.js.map