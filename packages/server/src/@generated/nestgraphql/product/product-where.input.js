"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const products_invoice_relation_filter_input_1 = require("../products-invoice/products-invoice-relation-filter.input");
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProductWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProductWhereInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProductWhereInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_relation_filter_input_1.ProductsInvoiceRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "productsInvoice", void 0);
ProductWhereInput = ProductWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
//# sourceMappingURL=product-where.input.js.map