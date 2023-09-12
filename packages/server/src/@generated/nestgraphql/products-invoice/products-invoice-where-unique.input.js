"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_input_1 = require("./products-invoice-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const product_list_relation_filter_input_1 = require("../product/product-list-relation-filter.input");
const case_log_relation_filter_input_1 = require("../case-log/case-log-relation-filter.input");
let ProductsInvoiceWhereUniqueInput = class ProductsInvoiceWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_where_input_1.ProductsInvoiceWhereInput], { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_where_input_1.ProductsInvoiceWhereInput], { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [products_invoice_where_input_1.ProductsInvoiceWhereInput], { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_list_relation_filter_input_1.ProductListRelationFilter, { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_relation_filter_input_1.CaseLogRelationFilter, { nullable: true })
], ProductsInvoiceWhereUniqueInput.prototype, "caseLog", void 0);
ProductsInvoiceWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceWhereUniqueInput);
exports.ProductsInvoiceWhereUniqueInput = ProductsInvoiceWhereUniqueInput;
//# sourceMappingURL=products-invoice-where-unique.input.js.map