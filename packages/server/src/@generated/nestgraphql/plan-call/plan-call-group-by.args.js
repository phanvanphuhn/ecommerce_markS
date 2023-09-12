"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_where_input_1 = require("./plan-call-where.input");
const class_transformer_1 = require("class-transformer");
const plan_call_order_by_with_aggregation_input_1 = require("./plan-call-order-by-with-aggregation.input");
const plan_call_scalar_field_enum_1 = require("./plan-call-scalar-field.enum");
const plan_call_scalar_where_with_aggregates_input_1 = require("./plan-call-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const plan_call_count_aggregate_input_1 = require("./plan-call-count-aggregate.input");
const plan_call_min_aggregate_input_1 = require("./plan-call-min-aggregate.input");
const plan_call_max_aggregate_input_1 = require("./plan-call-max-aggregate.input");
let PlanCallGroupByArgs = class PlanCallGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => plan_call_where_input_1.PlanCallWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_where_input_1.PlanCallWhereInput)
], PlanCallGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_order_by_with_aggregation_input_1.PlanCallOrderByWithAggregationInput], { nullable: true })
], PlanCallGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_scalar_field_enum_1.PlanCallScalarFieldEnum], { nullable: false })
], PlanCallGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_scalar_where_with_aggregates_input_1.PlanCallScalarWhereWithAggregatesInput, { nullable: true })
], PlanCallGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PlanCallGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PlanCallGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_count_aggregate_input_1.PlanCallCountAggregateInput, { nullable: true })
], PlanCallGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_min_aggregate_input_1.PlanCallMinAggregateInput, { nullable: true })
], PlanCallGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_max_aggregate_input_1.PlanCallMaxAggregateInput, { nullable: true })
], PlanCallGroupByArgs.prototype, "_max", void 0);
PlanCallGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PlanCallGroupByArgs);
exports.PlanCallGroupByArgs = PlanCallGroupByArgs;
//# sourceMappingURL=plan-call-group-by.args.js.map