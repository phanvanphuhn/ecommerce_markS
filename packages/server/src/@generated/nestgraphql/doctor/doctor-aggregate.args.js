"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_where_input_1 = require("./doctor-where.input");
const class_transformer_1 = require("class-transformer");
const doctor_order_by_with_relation_input_1 = require("./doctor-order-by-with-relation.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const doctor_count_aggregate_input_1 = require("./doctor-count-aggregate.input");
const doctor_avg_aggregate_input_1 = require("./doctor-avg-aggregate.input");
const doctor_sum_aggregate_input_1 = require("./doctor-sum-aggregate.input");
const doctor_min_aggregate_input_1 = require("./doctor-min-aggregate.input");
const doctor_max_aggregate_input_1 = require("./doctor-max-aggregate.input");
let DoctorAggregateArgs = class DoctorAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], DoctorAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_order_by_with_relation_input_1.DoctorOrderByWithRelationInput], { nullable: true })
], DoctorAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true })
], DoctorAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DoctorAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_count_aggregate_input_1.DoctorCountAggregateInput, { nullable: true })
], DoctorAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_avg_aggregate_input_1.DoctorAvgAggregateInput, { nullable: true })
], DoctorAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_sum_aggregate_input_1.DoctorSumAggregateInput, { nullable: true })
], DoctorAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_min_aggregate_input_1.DoctorMinAggregateInput, { nullable: true })
], DoctorAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_max_aggregate_input_1.DoctorMaxAggregateInput, { nullable: true })
], DoctorAggregateArgs.prototype, "_max", void 0);
DoctorAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DoctorAggregateArgs);
exports.DoctorAggregateArgs = DoctorAggregateArgs;
//# sourceMappingURL=doctor-aggregate.args.js.map