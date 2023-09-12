"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_input_1 = require("./product-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const products_invoice_relation_filter_input_1 = require("../products-invoice/products-invoice-relation-filter.input");
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_input_1.ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_input_1.ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_input_1.ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_relation_filter_input_1.ProductsInvoiceRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "productsInvoice", void 0);
ProductWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ProductWhereUniqueInput);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
//# sourceMappingURL=product-where-unique.input.js.map