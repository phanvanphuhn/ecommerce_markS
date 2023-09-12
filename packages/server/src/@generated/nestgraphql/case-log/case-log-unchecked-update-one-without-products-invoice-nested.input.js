"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_without_products_invoice_input_1 = require("./case-log-create-without-products-invoice.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_or_connect_without_products_invoice_input_1 = require("./case-log-create-or-connect-without-products-invoice.input");
const case_log_upsert_without_products_invoice_input_1 = require("./case-log-upsert-without-products-invoice.input");
const case_log_where_input_1 = require("./case-log-where.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const case_log_update_to_one_with_where_without_products_invoice_input_1 = require("./case-log-update-to-one-with-where-without-products-invoice.input");
let CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput = class CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_create_without_products_invoice_input_1.CaseLogCreateWithoutProductsInvoiceInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_without_products_invoice_input_1.CaseLogCreateWithoutProductsInvoiceInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_or_connect_without_products_invoice_input_1.CaseLogCreateOrConnectWithoutProductsInvoiceInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_or_connect_without_products_invoice_input_1.CaseLogCreateOrConnectWithoutProductsInvoiceInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_upsert_without_products_invoice_input_1.CaseLogUpsertWithoutProductsInvoiceInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_upsert_without_products_invoice_input_1.CaseLogUpsertWithoutProductsInvoiceInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_to_one_with_where_without_products_invoice_input_1.CaseLogUpdateToOneWithWhereWithoutProductsInvoiceInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_to_one_with_where_without_products_invoice_input_1.CaseLogUpdateToOneWithWhereWithoutProductsInvoiceInput)
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput.prototype, "update", void 0);
CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput);
exports.CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput = CaseLogUncheckedUpdateOneWithoutProductsInvoiceNestedInput;
//# sourceMappingURL=case-log-unchecked-update-one-without-products-invoice-nested.input.js.map