"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUncheckedCreateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_unchecked_create_nested_many_without_products_invoice_input_1 = require("../product/product-unchecked-create-nested-many-without-products-invoice.input");
let ProductsInvoiceUncheckedCreateWithoutCaseLogInput = class ProductsInvoiceUncheckedCreateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutCaseLogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutCaseLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutCaseLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_unchecked_create_nested_many_without_products_invoice_input_1.ProductUncheckedCreateNestedManyWithoutProductsInvoiceInput, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutCaseLogInput.prototype, "products", void 0);
ProductsInvoiceUncheckedCreateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUncheckedCreateWithoutCaseLogInput);
exports.ProductsInvoiceUncheckedCreateWithoutCaseLogInput = ProductsInvoiceUncheckedCreateWithoutCaseLogInput;
//# sourceMappingURL=products-invoice-unchecked-create-without-case-log.input.js.map