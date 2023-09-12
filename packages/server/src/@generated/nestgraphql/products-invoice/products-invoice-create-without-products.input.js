"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceCreateWithoutProductsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_nested_one_without_products_invoice_input_1 = require("../case-log/case-log-create-nested-one-without-products-invoice.input");
let ProductsInvoiceCreateWithoutProductsInput = class ProductsInvoiceCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_one_without_products_invoice_input_1.CaseLogCreateNestedOneWithoutProductsInvoiceInput, { nullable: true })
], ProductsInvoiceCreateWithoutProductsInput.prototype, "caseLog", void 0);
ProductsInvoiceCreateWithoutProductsInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceCreateWithoutProductsInput);
exports.ProductsInvoiceCreateWithoutProductsInput = ProductsInvoiceCreateWithoutProductsInput;
//# sourceMappingURL=products-invoice-create-without-products.input.js.map