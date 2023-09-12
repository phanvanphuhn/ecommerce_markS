"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_order_by_with_relation_input_1 = require("./products-invoice-order-by-with-relation.input");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const products_invoice_count_aggregate_input_1 = require("./products-invoice-count-aggregate.input");
const products_invoice_min_aggregate_input_1 = require("./products-invoice-min-aggregate.input");
const products_invoice_max_aggregate_input_1 = require("./products-invoice-max-aggregate.input");
let ProductsInvoiceAggregateArgs = class ProductsInvoiceAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_order_by_with_relation_input_1.ProductsInvoiceOrderByWithRelationInput], { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_aggregate_input_1.ProductsInvoiceCountAggregateInput, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_min_aggregate_input_1.ProductsInvoiceMinAggregateInput, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_max_aggregate_input_1.ProductsInvoiceMaxAggregateInput, { nullable: true })
], ProductsInvoiceAggregateArgs.prototype, "_max", void 0);
ProductsInvoiceAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ProductsInvoiceAggregateArgs);
exports.ProductsInvoiceAggregateArgs = ProductsInvoiceAggregateArgs;
//# sourceMappingURL=products-invoice-aggregate.args.js.map