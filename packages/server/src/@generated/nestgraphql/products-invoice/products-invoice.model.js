"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoice = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const product_model_1 = require("../product/product.model");
const case_log_model_1 = require("../case-log/case-log.model");
const products_invoice_count_output_1 = require("./products-invoice-count.output");
let ProductsInvoice = class ProductsInvoice {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], ProductsInvoice.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductsInvoice.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductsInvoice.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_model_1.Product], { nullable: true })
], ProductsInvoice.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_model_1.CaseLog, { nullable: true })
], ProductsInvoice.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_output_1.ProductsInvoiceCount, { nullable: false })
], ProductsInvoice.prototype, "_count", void 0);
ProductsInvoice = __decorate([
    (0, graphql_2.ObjectType)()
], ProductsInvoice);
exports.ProductsInvoice = ProductsInvoice;
//# sourceMappingURL=products-invoice.model.js.map