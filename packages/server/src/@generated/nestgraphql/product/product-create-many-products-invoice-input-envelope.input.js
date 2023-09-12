"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyProductsInvoiceInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_create_many_products_invoice_input_1 = require("./product-create-many-products-invoice.input");
const class_transformer_1 = require("class-transformer");
let ProductCreateManyProductsInvoiceInputEnvelope = class ProductCreateManyProductsInvoiceInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [product_create_many_products_invoice_input_1.ProductCreateManyProductsInvoiceInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => product_create_many_products_invoice_input_1.ProductCreateManyProductsInvoiceInput)
], ProductCreateManyProductsInvoiceInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCreateManyProductsInvoiceInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyProductsInvoiceInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], ProductCreateManyProductsInvoiceInputEnvelope);
exports.ProductCreateManyProductsInvoiceInputEnvelope = ProductCreateManyProductsInvoiceInputEnvelope;
//# sourceMappingURL=product-create-many-products-invoice-input-envelope.input.js.map