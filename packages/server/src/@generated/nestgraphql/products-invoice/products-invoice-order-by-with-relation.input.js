"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const product_order_by_relation_aggregate_input_1 = require("../product/product-order-by-relation-aggregate.input");
const case_log_order_by_with_relation_input_1 = require("../case-log/case-log-order-by-with-relation.input");
let ProductsInvoiceOrderByWithRelationInput = class ProductsInvoiceOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProductsInvoiceOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_order_by_relation_aggregate_input_1.ProductOrderByRelationAggregateInput, { nullable: true })
], ProductsInvoiceOrderByWithRelationInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_order_by_with_relation_input_1.CaseLogOrderByWithRelationInput, { nullable: true })
], ProductsInvoiceOrderByWithRelationInput.prototype, "caseLog", void 0);
ProductsInvoiceOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceOrderByWithRelationInput);
exports.ProductsInvoiceOrderByWithRelationInput = ProductsInvoiceOrderByWithRelationInput;
//# sourceMappingURL=products-invoice-order-by-with-relation.input.js.map