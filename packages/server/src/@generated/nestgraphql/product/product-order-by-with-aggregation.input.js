"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const product_count_order_by_aggregate_input_1 = require("./product-count-order-by-aggregate.input");
const product_avg_order_by_aggregate_input_1 = require("./product-avg-order-by-aggregate.input");
const product_max_order_by_aggregate_input_1 = require("./product-max-order-by-aggregate.input");
const product_min_order_by_aggregate_input_1 = require("./product-min-order-by-aggregate.input");
const product_sum_order_by_aggregate_input_1 = require("./product-sum-order-by-aggregate.input");
let ProductOrderByWithAggregationInput = class ProductOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_count_order_by_aggregate_input_1.ProductCountOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_avg_order_by_aggregate_input_1.ProductAvgOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_max_order_by_aggregate_input_1.ProductMaxOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_min_order_by_aggregate_input_1.ProductMinOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_sum_order_by_aggregate_input_1.ProductSumOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ProductOrderByWithAggregationInput);
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput;
//# sourceMappingURL=product-order-by-with-aggregation.input.js.map