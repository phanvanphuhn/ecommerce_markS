"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductsInvoiceArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_order_by_with_relation_input_1 = require("./products-invoice-order-by-with-relation.input");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const products_invoice_scalar_field_enum_1 = require("./products-invoice-scalar-field.enum");
let FindManyProductsInvoiceArgs = class FindManyProductsInvoiceArgs {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], FindManyProductsInvoiceArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_order_by_with_relation_input_1.ProductsInvoiceOrderByWithRelationInput], { nullable: true })
], FindManyProductsInvoiceArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: true })
], FindManyProductsInvoiceArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductsInvoiceArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductsInvoiceArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_scalar_field_enum_1.ProductsInvoiceScalarFieldEnum], { nullable: true })
], FindManyProductsInvoiceArgs.prototype, "distinct", void 0);
FindManyProductsInvoiceArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyProductsInvoiceArgs);
exports.FindManyProductsInvoiceArgs = FindManyProductsInvoiceArgs;
//# sourceMappingURL=find-many-products-invoice.args.js.map