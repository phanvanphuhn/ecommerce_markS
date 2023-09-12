"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_order_by_with_aggregation_input_1 = require("./products-invoice-order-by-with-aggregation.input");
const products_invoice_scalar_field_enum_1 = require("./products-invoice-scalar-field.enum");
const products_invoice_scalar_where_with_aggregates_input_1 = require("./products-invoice-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const products_invoice_count_aggregate_input_1 = require("./products-invoice-count-aggregate.input");
const products_invoice_min_aggregate_input_1 = require("./products-invoice-min-aggregate.input");
const products_invoice_max_aggregate_input_1 = require("./products-invoice-max-aggregate.input");
let ProductsInvoiceGroupByArgs = class ProductsInvoiceGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_order_by_with_aggregation_input_1.ProductsInvoiceOrderByWithAggregationInput], { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_scalar_field_enum_1.ProductsInvoiceScalarFieldEnum], { nullable: false })
], ProductsInvoiceGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_scalar_where_with_aggregates_input_1.ProductsInvoiceScalarWhereWithAggregatesInput, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_aggregate_input_1.ProductsInvoiceCountAggregateInput, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_min_aggregate_input_1.ProductsInvoiceMinAggregateInput, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_max_aggregate_input_1.ProductsInvoiceMaxAggregateInput, { nullable: true })
], ProductsInvoiceGroupByArgs.prototype, "_max", void 0);
ProductsInvoiceGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ProductsInvoiceGroupByArgs);
exports.ProductsInvoiceGroupByArgs = ProductsInvoiceGroupByArgs;
//# sourceMappingURL=products-invoice-group-by.args.js.map