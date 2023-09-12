"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_count_aggregate_output_1 = require("./products-invoice-count-aggregate.output");
const products_invoice_min_aggregate_output_1 = require("./products-invoice-min-aggregate.output");
const products_invoice_max_aggregate_output_1 = require("./products-invoice-max-aggregate.output");
let ProductsInvoiceGroupBy = class ProductsInvoiceGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductsInvoiceGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductsInvoiceGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductsInvoiceGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_aggregate_output_1.ProductsInvoiceCountAggregate, { nullable: true })
], ProductsInvoiceGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_min_aggregate_output_1.ProductsInvoiceMinAggregate, { nullable: true })
], ProductsInvoiceGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_max_aggregate_output_1.ProductsInvoiceMaxAggregate, { nullable: true })
], ProductsInvoiceGroupBy.prototype, "_max", void 0);
ProductsInvoiceGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductsInvoiceGroupBy);
exports.ProductsInvoiceGroupBy = ProductsInvoiceGroupBy;
//# sourceMappingURL=products-invoice-group-by.output.js.map