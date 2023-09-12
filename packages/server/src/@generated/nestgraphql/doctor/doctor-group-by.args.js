"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_where_input_1 = require("./doctor-where.input");
const class_transformer_1 = require("class-transformer");
const doctor_order_by_with_aggregation_input_1 = require("./doctor-order-by-with-aggregation.input");
const doctor_scalar_field_enum_1 = require("./doctor-scalar-field.enum");
const doctor_scalar_where_with_aggregates_input_1 = require("./doctor-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const doctor_count_aggregate_input_1 = require("./doctor-count-aggregate.input");
const doctor_avg_aggregate_input_1 = require("./doctor-avg-aggregate.input");
const doctor_sum_aggregate_input_1 = require("./doctor-sum-aggregate.input");
const doctor_min_aggregate_input_1 = require("./doctor-min-aggregate.input");
const doctor_max_aggregate_input_1 = require("./doctor-max-aggregate.input");
let DoctorGroupByArgs = class DoctorGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], DoctorGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_order_by_with_aggregation_input_1.DoctorOrderByWithAggregationInput], { nullable: true })
], DoctorGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_scalar_field_enum_1.DoctorScalarFieldEnum], { nullable: false })
], DoctorGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_scalar_where_with_aggregates_input_1.DoctorScalarWhereWithAggregatesInput, { nullable: true })
], DoctorGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_count_aggregate_input_1.DoctorCountAggregateInput, { nullable: true })
], DoctorGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_avg_aggregate_input_1.DoctorAvgAggregateInput, { nullable: true })
], DoctorGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_sum_aggregate_input_1.DoctorSumAggregateInput, { nullable: true })
], DoctorGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_min_aggregate_input_1.DoctorMinAggregateInput, { nullable: true })
], DoctorGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_max_aggregate_input_1.DoctorMaxAggregateInput, { nullable: true })
], DoctorGroupByArgs.prototype, "_max", void 0);
DoctorGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DoctorGroupByArgs);
exports.DoctorGroupByArgs = DoctorGroupByArgs;
//# sourceMappingURL=doctor-group-by.args.js.map