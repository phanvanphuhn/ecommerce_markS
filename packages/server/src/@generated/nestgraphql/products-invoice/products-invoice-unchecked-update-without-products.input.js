"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUncheckedUpdateWithoutProductsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_unchecked_update_one_without_products_invoice_nested_input_1 = require("../case-log/case-log-unchecked-update-one-without-products-invoice-nested.input");
let ProductsInvoiceUncheckedUpdateWithoutProductsInput = class ProductsInvoiceUncheckedUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_one_without_products_invoice_nested_input_1.CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUncheckedUpdateWithoutProductsInput.prototype, "caseLog", void 0);
ProductsInvoiceUncheckedUpdateWithoutProductsInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUncheckedUpdateWithoutProductsInput);
exports.ProductsInvoiceUncheckedUpdateWithoutProductsInput = ProductsInvoiceUncheckedUpdateWithoutProductsInput;
//# sourceMappingURL=products-invoice-unchecked-update-without-products.input.js.map