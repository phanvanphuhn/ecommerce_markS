"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_unique_input_1 = require("./product-where-unique.input");
const class_transformer_1 = require("class-transformer");
const product_create_without_products_invoice_input_1 = require("./product-create-without-products-invoice.input");
let ProductCreateOrConnectWithoutProductsInvoiceInput = class ProductCreateOrConnectWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutProductsInvoiceInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput)
], ProductCreateOrConnectWithoutProductsInvoiceInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], ProductCreateOrConnectWithoutProductsInvoiceInput);
exports.ProductCreateOrConnectWithoutProductsInvoiceInput = ProductCreateOrConnectWithoutProductsInvoiceInput;
//# sourceMappingURL=product-create-or-connect-without-products-invoice.input.js.map