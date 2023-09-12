"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const hospital_count_order_by_aggregate_input_1 = require("./hospital-count-order-by-aggregate.input");
const hospital_avg_order_by_aggregate_input_1 = require("./hospital-avg-order-by-aggregate.input");
const hospital_max_order_by_aggregate_input_1 = require("./hospital-max-order-by-aggregate.input");
const hospital_min_order_by_aggregate_input_1 = require("./hospital-min-order-by-aggregate.input");
const hospital_sum_order_by_aggregate_input_1 = require("./hospital-sum-order-by-aggregate.input");
let HospitalOrderByWithAggregationInput = class HospitalOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_count_order_by_aggregate_input_1.HospitalCountOrderByAggregateInput, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_avg_order_by_aggregate_input_1.HospitalAvgOrderByAggregateInput, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_max_order_by_aggregate_input_1.HospitalMaxOrderByAggregateInput, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_min_order_by_aggregate_input_1.HospitalMinOrderByAggregateInput, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_sum_order_by_aggregate_input_1.HospitalSumOrderByAggregateInput, { nullable: true })
], HospitalOrderByWithAggregationInput.prototype, "_sum", void 0);
HospitalOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalOrderByWithAggregationInput);
exports.HospitalOrderByWithAggregationInput = HospitalOrderByWithAggregationInput;
//# sourceMappingURL=hospital-order-by-with-aggregation.input.js.map