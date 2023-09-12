"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_where_input_1 = require("./case-log-where.input");
const class_transformer_1 = require("class-transformer");
const case_log_order_by_with_aggregation_input_1 = require("./case-log-order-by-with-aggregation.input");
const case_log_scalar_field_enum_1 = require("./case-log-scalar-field.enum");
const case_log_scalar_where_with_aggregates_input_1 = require("./case-log-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const case_log_count_aggregate_input_1 = require("./case-log-count-aggregate.input");
const case_log_avg_aggregate_input_1 = require("./case-log-avg-aggregate.input");
const case_log_sum_aggregate_input_1 = require("./case-log-sum-aggregate.input");
const case_log_min_aggregate_input_1 = require("./case-log-min-aggregate.input");
const case_log_max_aggregate_input_1 = require("./case-log-max-aggregate.input");
let CaseLogGroupByArgs = class CaseLogGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_order_by_with_aggregation_input_1.CaseLogOrderByWithAggregationInput], { nullable: true })
], CaseLogGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_scalar_field_enum_1.CaseLogScalarFieldEnum], { nullable: false })
], CaseLogGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_scalar_where_with_aggregates_input_1.CaseLogScalarWhereWithAggregatesInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], CaseLogGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], CaseLogGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_count_aggregate_input_1.CaseLogCountAggregateInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_avg_aggregate_input_1.CaseLogAvgAggregateInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_sum_aggregate_input_1.CaseLogSumAggregateInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_min_aggregate_input_1.CaseLogMinAggregateInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_max_aggregate_input_1.CaseLogMaxAggregateInput, { nullable: true })
], CaseLogGroupByArgs.prototype, "_max", void 0);
CaseLogGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CaseLogGroupByArgs);
exports.CaseLogGroupByArgs = CaseLogGroupByArgs;
//# sourceMappingURL=case-log-group-by.args.js.map