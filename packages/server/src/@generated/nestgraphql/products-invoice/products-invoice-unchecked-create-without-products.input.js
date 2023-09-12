"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUncheckedCreateWithoutProductsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_unchecked_create_nested_one_without_products_invoice_input_1 = require("../case-log/case-log-unchecked-create-nested-one-without-products-invoice.input");
let ProductsInvoiceUncheckedCreateWithoutProductsInput = class ProductsInvoiceUncheckedCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_create_nested_one_without_products_invoice_input_1.CaseLogUncheckedCreateNestedOneWithoutProductsInvoiceInput, { nullable: true })
], ProductsInvoiceUncheckedCreateWithoutProductsInput.prototype, "caseLog", void 0);
ProductsInvoiceUncheckedCreateWithoutProductsInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUncheckedCreateWithoutProductsInput);
exports.ProductsInvoiceUncheckedCreateWithoutProductsInput = ProductsInvoiceUncheckedCreateWithoutProductsInput;
//# sourceMappingURL=products-invoice-unchecked-create-without-products.input.js.map