"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUpdateOneWithoutProductsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_create_without_products_input_1 = require("./products-invoice-create-without-products.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_create_or_connect_without_products_input_1 = require("./products-invoice-create-or-connect-without-products.input");
const products_invoice_upsert_without_products_input_1 = require("./products-invoice-upsert-without-products.input");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const products_invoice_update_to_one_with_where_without_products_input_1 = require("./products-invoice-update-to-one-with-where-without-products.input");
let ProductsInvoiceUpdateOneWithoutProductsNestedInput = class ProductsInvoiceUpdateOneWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_without_products_input_1.ProductsInvoiceCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_create_without_products_input_1.ProductsInvoiceCreateWithoutProductsInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_or_connect_without_products_input_1.ProductsInvoiceCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_create_or_connect_without_products_input_1.ProductsInvoiceCreateOrConnectWithoutProductsInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_upsert_without_products_input_1.ProductsInvoiceUpsertWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_upsert_without_products_input_1.ProductsInvoiceUpsertWithoutProductsInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_input_1.ProductsInvoiceWhereInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_to_one_with_where_without_products_input_1.ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_update_to_one_with_where_without_products_input_1.ProductsInvoiceUpdateToOneWithWhereWithoutProductsInput)
], ProductsInvoiceUpdateOneWithoutProductsNestedInput.prototype, "update", void 0);
ProductsInvoiceUpdateOneWithoutProductsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUpdateOneWithoutProductsNestedInput);
exports.ProductsInvoiceUpdateOneWithoutProductsNestedInput = ProductsInvoiceUpdateOneWithoutProductsNestedInput;
//# sourceMappingURL=products-invoice-update-one-without-products-nested.input.js.map