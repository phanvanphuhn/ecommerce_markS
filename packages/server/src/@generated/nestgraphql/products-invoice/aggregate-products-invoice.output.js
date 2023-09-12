"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductsInvoice = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_count_aggregate_output_1 = require("./products-invoice-count-aggregate.output");
const products_invoice_min_aggregate_output_1 = require("./products-invoice-min-aggregate.output");
const products_invoice_max_aggregate_output_1 = require("./products-invoice-max-aggregate.output");
let AggregateProductsInvoice = class AggregateProductsInvoice {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_count_aggregate_output_1.ProductsInvoiceCountAggregate, { nullable: true })
], AggregateProductsInvoice.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_min_aggregate_output_1.ProductsInvoiceMinAggregate, { nullable: true })
], AggregateProductsInvoice.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_max_aggregate_output_1.ProductsInvoiceMaxAggregate, { nullable: true })
], AggregateProductsInvoice.prototype, "_max", void 0);
AggregateProductsInvoice = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProductsInvoice);
exports.AggregateProductsInvoice = AggregateProductsInvoice;
//# sourceMappingURL=aggregate-products-invoice.output.js.map