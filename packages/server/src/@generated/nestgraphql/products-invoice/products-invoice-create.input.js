"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_create_nested_many_without_products_invoice_input_1 = require("../product/product-create-nested-many-without-products-invoice.input");
const case_log_create_nested_one_without_products_invoice_input_1 = require("../case-log/case-log-create-nested-one-without-products-invoice.input");
let ProductsInvoiceCreateInput = class ProductsInvoiceCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_nested_many_without_products_invoice_input_1.ProductCreateNestedManyWithoutProductsInvoiceInput, { nullable: true })
], ProductsInvoiceCreateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_one_without_products_invoice_input_1.CaseLogCreateNestedOneWithoutProductsInvoiceInput, { nullable: true })
], ProductsInvoiceCreateInput.prototype, "caseLog", void 0);
ProductsInvoiceCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceCreateInput);
exports.ProductsInvoiceCreateInput = ProductsInvoiceCreateInput;
//# sourceMappingURL=products-invoice-create.input.js.map