"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUncheckedUpdateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_unchecked_update_many_without_products_invoice_nested_input_1 = require("../product/product-unchecked-update-many-without-products-invoice-nested.input");
let ProductsInvoiceUncheckedUpdateWithoutCaseLogInput = class ProductsInvoiceUncheckedUpdateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutCaseLogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutCaseLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutCaseLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_unchecked_update_many_without_products_invoice_nested_input_1.ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutCaseLogInput.prototype, "products", void 0);
ProductsInvoiceUncheckedUpdateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUncheckedUpdateWithoutCaseLogInput);
exports.ProductsInvoiceUncheckedUpdateWithoutCaseLogInput = ProductsInvoiceUncheckedUpdateWithoutCaseLogInput;
//# sourceMappingURL=products-invoice-unchecked-update-without-case-log.input.js.map