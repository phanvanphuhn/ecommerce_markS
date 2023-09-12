"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductsInvoiceScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let ProductsInvoiceScalarWhereWithAggregatesInput = ProductsInvoiceScalarWhereWithAggregatesInput_1 = class ProductsInvoiceScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductsInvoiceScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductsInvoiceScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductsInvoiceScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ProductsInvoiceScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ProductsInvoiceScalarWhereWithAggregatesInput = ProductsInvoiceScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceScalarWhereWithAggregatesInput);
exports.ProductsInvoiceScalarWhereWithAggregatesInput = ProductsInvoiceScalarWhereWithAggregatesInput;
//# sourceMappingURL=products-invoice-scalar-where-with-aggregates.input.js.map