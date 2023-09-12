"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_update_without_products_input_1 = require("./products-invoice-update-without-products.input");
let ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput = class ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_without_products_input_1.ProductsInvoiceUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_update_without_products_input_1.ProductsInvoiceUpdateWithoutProductsInput)
], ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput.prototype, "data", void 0);
ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput);
exports.ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput = ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput;
//# sourceMappingURL=products-invoice-update-to-one-with-where-without-products.input.js.map