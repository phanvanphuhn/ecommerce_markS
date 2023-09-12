"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_unique_input_1 = require("./product-where-unique.input");
const class_transformer_1 = require("class-transformer");
const product_update_without_products_invoice_input_1 = require("./product-update-without-products-invoice.input");
const product_create_without_products_invoice_input_1 = require("./product-create-without-products-invoice.input");
let ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput = class ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_update_without_products_invoice_input_1.ProductUpdateWithoutProductsInvoiceInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_update_without_products_invoice_input_1.ProductUpdateWithoutProductsInvoiceInput)
], ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput)
], ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput);
exports.ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput = ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput;
//# sourceMappingURL=product-upsert-with-where-unique-without-products-invoice.input.js.map