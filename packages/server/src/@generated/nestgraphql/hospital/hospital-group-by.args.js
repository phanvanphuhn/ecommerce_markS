"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_input_1 = require("./hospital-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_order_by_with_aggregation_input_1 = require("./hospital-order-by-with-aggregation.input");
const hospital_scalar_field_enum_1 = require("./hospital-scalar-field.enum");
const hospital_scalar_where_with_aggregates_input_1 = require("./hospital-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const hospital_count_aggregate_input_1 = require("./hospital-count-aggregate.input");
const hospital_avg_aggregate_input_1 = require("./hospital-avg-aggregate.input");
const hospital_sum_aggregate_input_1 = require("./hospital-sum-aggregate.input");
const hospital_min_aggregate_input_1 = require("./hospital-min-aggregate.input");
const hospital_max_aggregate_input_1 = require("./hospital-max-aggregate.input");
let HospitalGroupByArgs = class HospitalGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_input_1.HospitalWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_input_1.HospitalWhereInput)
], HospitalGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_order_by_with_aggregation_input_1.HospitalOrderByWithAggregationInput], { nullable: true })
], HospitalGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_scalar_field_enum_1.HospitalScalarFieldEnum], { nullable: false })
], HospitalGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_scalar_where_with_aggregates_input_1.HospitalScalarWhereWithAggregatesInput, { nullable: true })
], HospitalGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_count_aggregate_input_1.HospitalCountAggregateInput, { nullable: true })
], HospitalGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_avg_aggregate_input_1.HospitalAvgAggregateInput, { nullable: true })
], HospitalGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_sum_aggregate_input_1.HospitalSumAggregateInput, { nullable: true })
], HospitalGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_min_aggregate_input_1.HospitalMinAggregateInput, { nullable: true })
], HospitalGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_max_aggregate_input_1.HospitalMaxAggregateInput, { nullable: true })
], HospitalGroupByArgs.prototype, "_max", void 0);
HospitalGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], HospitalGroupByArgs);
exports.HospitalGroupByArgs = HospitalGroupByArgs;
//# sourceMappingURL=hospital-group-by.args.js.map