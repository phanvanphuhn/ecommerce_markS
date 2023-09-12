"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProductsInvoiceArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_update_input_1 = require("./products-invoice-update.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
let UpdateOneProductsInvoiceArgs = class UpdateOneProductsInvoiceArgs {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_input_1.ProductsInvoiceUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_update_input_1.ProductsInvoiceUpdateInput)
], UpdateOneProductsInvoiceArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput)
], UpdateOneProductsInvoiceArgs.prototype, "where", void 0);
UpdateOneProductsInvoiceArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneProductsInvoiceArgs);
exports.UpdateOneProductsInvoiceArgs = UpdateOneProductsInvoiceArgs;
//# sourceMappingURL=update-one-products-invoice.args.js.map