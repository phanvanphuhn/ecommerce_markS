"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_unchecked_update_many_without_products_invoice_nested_input_1 = require("../product/product-unchecked-update-many-without-products-invoice-nested.input");
const case_log_unchecked_update_one_without_products_invoice_nested_input_1 = require("../case-log/case-log-unchecked-update-one-without-products-invoice-nested.input");
let ProductsInvoiceUncheckedUpdateInput = class ProductsInvoiceUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductsInvoiceUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_unchecked_update_many_without_products_invoice_nested_input_1.ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUncheckedUpdateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_one_without_products_invoice_nested_input_1.CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput, { nullable: true })
], ProductsInvoiceUncheckedUpdateInput.prototype, "caseLog", void 0);
ProductsInvoiceUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUncheckedUpdateInput);
exports.ProductsInvoiceUncheckedUpdateInput = ProductsInvoiceUncheckedUpdateInput;
//# sourceMappingURL=products-invoice-unchecked-update.input.js.map