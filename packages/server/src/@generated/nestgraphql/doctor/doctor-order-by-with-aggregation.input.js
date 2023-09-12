"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const doctor_count_order_by_aggregate_input_1 = require("./doctor-count-order-by-aggregate.input");
const doctor_avg_order_by_aggregate_input_1 = require("./doctor-avg-order-by-aggregate.input");
const doctor_max_order_by_aggregate_input_1 = require("./doctor-max-order-by-aggregate.input");
const doctor_min_order_by_aggregate_input_1 = require("./doctor-min-order-by-aggregate.input");
const doctor_sum_order_by_aggregate_input_1 = require("./doctor-sum-order-by-aggregate.input");
let DoctorOrderByWithAggregationInput = class DoctorOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_count_order_by_aggregate_input_1.DoctorCountOrderByAggregateInput, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_avg_order_by_aggregate_input_1.DoctorAvgOrderByAggregateInput, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_max_order_by_aggregate_input_1.DoctorMaxOrderByAggregateInput, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_min_order_by_aggregate_input_1.DoctorMinOrderByAggregateInput, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_sum_order_by_aggregate_input_1.DoctorSumOrderByAggregateInput, { nullable: true })
], DoctorOrderByWithAggregationInput.prototype, "_sum", void 0);
DoctorOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorOrderByWithAggregationInput);
exports.DoctorOrderByWithAggregationInput = DoctorOrderByWithAggregationInput;
//# sourceMappingURL=doctor-order-by-with-aggregation.input.js.map