"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUpsertWithoutProductsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_update_without_products_input_1 = require("./products-invoice-update-without-products.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_create_without_products_input_1 = require("./products-invoice-create-without-products.input");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
let ProductsInvoiceUpsertWithoutProductsInput = class ProductsInvoiceUpsertWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_without_products_input_1.ProductsInvoiceUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_update_without_products_input_1.ProductsInvoiceUpdateWithoutProductsInput)
], ProductsInvoiceUpsertWithoutProductsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_without_products_input_1.ProductsInvoiceCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_create_without_products_input_1.ProductsInvoiceCreateWithoutProductsInput)
], ProductsInvoiceUpsertWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceUpsertWithoutProductsInput.prototype, "where", void 0);
ProductsInvoiceUpsertWithoutProductsInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUpsertWithoutProductsInput);
exports.ProductsInvoiceUpsertWithoutProductsInput = ProductsInvoiceUpsertWithoutProductsInput;
//# sourceMappingURL=products-invoice-upsert-without-products.input.js.map