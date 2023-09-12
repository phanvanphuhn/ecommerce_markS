"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_update_many_without_products_invoice_nested_input_1 = require("../product/product-update-many-without-products-invoice-nested.input");
const case_log_update_one_without_products_invoice_nested_input_1 = require("../case-log/case-log-update-one-without-products-invoice-nested.input");
let ProductsInvoiceUpdateInput = class ProductsInvoiceUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_update_many_without_products_invoice_nested_input_1.ProductUpdateManyWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUpdateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_one_without_products_invoice_nested_input_1.CaseLogUpdateOneWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUpdateInput.prototype, "caseLog", void 0);
ProductsInvoiceUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUpdateInput);
exports.ProductsInvoiceUpdateInput = ProductsInvoiceUpdateInput;
//# sourceMappingURL=products-invoice-update.input.js.map