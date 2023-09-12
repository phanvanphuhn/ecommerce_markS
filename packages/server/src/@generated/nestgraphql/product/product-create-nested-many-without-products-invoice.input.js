"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_create_without_products_invoice_input_1 = require("./product-create-without-products-invoice.input");
const class_transformer_1 = require("class-transformer");
const product_create_or_connect_without_products_invoice_input_1 = require("./product-create-or-connect-without-products-invoice.input");
const product_create_many_products_invoice_input_envelope_input_1 = require("./product-create-many-products-invoice-input-envelope.input");
const product_where_unique_input_1 = require("./product-where-unique.input");
let ProductCreateNestedManyWithoutProductsInvoiceInput = class ProductCreateNestedManyWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => [product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput)
], ProductCreateNestedManyWithoutProductsInvoiceInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_create_or_connect_without_products_invoice_input_1.ProductCreateOrConnectWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_or_connect_without_products_invoice_input_1.ProductCreateOrConnectWithoutProductsInvoiceInput)
], ProductCreateNestedManyWithoutProductsInvoiceInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_many_products_invoice_input_envelope_input_1.ProductCreateManyProductsInvoiceInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_many_products_invoice_input_envelope_input_1.ProductCreateManyProductsInvoiceInputEnvelope)
], ProductCreateNestedManyWithoutProductsInvoiceInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_unique_input_1.ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductCreateNestedManyWithoutProductsInvoiceInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], ProductCreateNestedManyWithoutProductsInvoiceInput);
exports.ProductCreateNestedManyWithoutProductsInvoiceInput = ProductCreateNestedManyWithoutProductsInvoiceInput;
//# sourceMappingURL=product-create-nested-many-without-products-invoice.input.js.map