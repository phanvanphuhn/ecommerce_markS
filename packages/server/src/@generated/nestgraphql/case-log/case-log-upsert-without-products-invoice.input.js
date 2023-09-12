"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpsertWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_update_without_products_invoice_input_1 = require("./case-log-update-without-products-invoice.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_without_products_invoice_input_1 = require("./case-log-create-without-products-invoice.input");
const case_log_where_input_1 = require("./case-log-where.input");
let CaseLogUpsertWithoutProductsInvoiceInput = class CaseLogUpsertWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_update_without_products_invoice_input_1.CaseLogUpdateWithoutProductsInvoiceInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_update_without_products_invoice_input_1.CaseLogUpdateWithoutProductsInvoiceInput)
], CaseLogUpsertWithoutProductsInvoiceInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_without_products_invoice_input_1.CaseLogCreateWithoutProductsInvoiceInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_create_without_products_invoice_input_1.CaseLogCreateWithoutProductsInvoiceInput)
], CaseLogUpsertWithoutProductsInvoiceInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogUpsertWithoutProductsInvoiceInput.prototype, "where", void 0);
CaseLogUpsertWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpsertWithoutProductsInvoiceInput);
exports.CaseLogUpsertWithoutProductsInvoiceInput = CaseLogUpsertWithoutProductsInvoiceInput;
//# sourceMappingURL=case-log-upsert-without-products-invoice.input.js.map