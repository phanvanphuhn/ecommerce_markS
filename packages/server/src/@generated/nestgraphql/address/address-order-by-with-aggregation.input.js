"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const address_count_order_by_aggregate_input_1 = require("./address-count-order-by-aggregate.input");
const address_avg_order_by_aggregate_input_1 = require("./address-avg-order-by-aggregate.input");
const address_max_order_by_aggregate_input_1 = require("./address-max-order-by-aggregate.input");
const address_min_order_by_aggregate_input_1 = require("./address-min-order-by-aggregate.input");
const address_sum_order_by_aggregate_input_1 = require("./address-sum-order-by-aggregate.input");
let AddressOrderByWithAggregationInput = class AddressOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_count_order_by_aggregate_input_1.AddressCountOrderByAggregateInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_avg_order_by_aggregate_input_1.AddressAvgOrderByAggregateInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_max_order_by_aggregate_input_1.AddressMaxOrderByAggregateInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_min_order_by_aggregate_input_1.AddressMinOrderByAggregateInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_sum_order_by_aggregate_input_1.AddressSumOrderByAggregateInput, { nullable: true })
], AddressOrderByWithAggregationInput.prototype, "_sum", void 0);
AddressOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], AddressOrderByWithAggregationInput);
exports.AddressOrderByWithAggregationInput = AddressOrderByWithAggregationInput;
//# sourceMappingURL=address-order-by-with-aggregation.input.js.map