"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductsInvoiceArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_order_by_with_relation_input_1 = require("./products-invoice-order-by-with-relation.input");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const products_invoice_scalar_field_enum_1 = require("./products-invoice-scalar-field.enum");
let FindFirstProductsInvoiceArgs = class FindFirstProductsInvoiceArgs {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], FindFirstProductsInvoiceArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_order_by_with_relation_input_1.ProductsInvoiceOrderByWithRelationInput], { nullable: true })
], FindFirstProductsInvoiceArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: true })
], FindFirstProductsInvoiceArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductsInvoiceArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductsInvoiceArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_scalar_field_enum_1.ProductsInvoiceScalarFieldEnum], { nullable: true })
], FindFirstProductsInvoiceArgs.prototype, "distinct", void 0);
FindFirstProductsInvoiceArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstProductsInvoiceArgs);
exports.FindFirstProductsInvoiceArgs = FindFirstProductsInvoiceArgs;
//# sourceMappingURL=find-first-products-invoice.args.js.map