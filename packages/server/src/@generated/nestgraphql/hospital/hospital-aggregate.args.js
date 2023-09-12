"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_input_1 = require("./hospital-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_order_by_with_relation_input_1 = require("./hospital-order-by-with-relation.input");
const hospital_where_unique_input_1 = require("./hospital-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const hospital_count_aggregate_input_1 = require("./hospital-count-aggregate.input");
const hospital_avg_aggregate_input_1 = require("./hospital-avg-aggregate.input");
const hospital_sum_aggregate_input_1 = require("./hospital-sum-aggregate.input");
const hospital_min_aggregate_input_1 = require("./hospital-min-aggregate.input");
const hospital_max_aggregate_input_1 = require("./hospital-max-aggregate.input");
let HospitalAggregateArgs = class HospitalAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_input_1.HospitalWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_input_1.HospitalWhereInput)
], HospitalAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_order_by_with_relation_input_1.HospitalOrderByWithRelationInput], { nullable: true })
], HospitalAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput, { nullable: true })
], HospitalAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_count_aggregate_input_1.HospitalCountAggregateInput, { nullable: true })
], HospitalAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_avg_aggregate_input_1.HospitalAvgAggregateInput, { nullable: true })
], HospitalAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_sum_aggregate_input_1.HospitalSumAggregateInput, { nullable: true })
], HospitalAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_min_aggregate_input_1.HospitalMinAggregateInput, { nullable: true })
], HospitalAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_max_aggregate_input_1.HospitalMaxAggregateInput, { nullable: true })
], HospitalAggregateArgs.prototype, "_max", void 0);
HospitalAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], HospitalAggregateArgs);
exports.HospitalAggregateArgs = HospitalAggregateArgs;
//# sourceMappingURL=hospital-aggregate.args.js.map