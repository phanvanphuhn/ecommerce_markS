"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const products_invoice_count_order_by_aggregate_input_1 = require("./products-invoice-count-order-by-aggregate.input");
const products_invoice_max_order_by_aggregate_input_1 = require("./products-invoice-max-order-by-aggregate.input");
const products_invoice_min_order_by_aggregate_input_1 = require("./products-invoice-min-order-by-aggregate.input");
let ProductsInvoiceOrderByWithAggregationInput = class ProductsInvoiceOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_order_by_aggregate_input_1.ProductsInvoiceCountOrderByAggregateInput, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_max_order_by_aggregate_input_1.ProductsInvoiceMaxOrderByAggregateInput, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_min_order_by_aggregate_input_1.ProductsInvoiceMinOrderByAggregateInput, { nullable: true })
], ProductsInvoiceOrderByWithAggregationInput.prototype, "_min", void 0);
ProductsInvoiceOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceOrderByWithAggregationInput);
exports.ProductsInvoiceOrderByWithAggregationInput = ProductsInvoiceOrderByWithAggregationInput;
//# sourceMappingURL=products-invoice-order-by-with-aggregation.input.js.map