"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const products_invoice_update_one_without_products_nested_input_1 = require("../products-invoice/products-invoice-update-one-without-products-nested.input");
let ProductUpdateInput = class ProductUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductUpdateInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_one_without_products_nested_input_1.ProductsInvoiceUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "productsInvoice", void 0);
ProductUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProductUpdateInput);
exports.ProductUpdateInput = ProductUpdateInput;
//# sourceMappingURL=product-update.input.js.map