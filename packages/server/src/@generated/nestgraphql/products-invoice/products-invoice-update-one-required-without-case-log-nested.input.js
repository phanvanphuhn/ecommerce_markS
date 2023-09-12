"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_create_without_case_log_input_1 = require("./products-invoice-create-without-case-log.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_create_or_connect_without_case_log_input_1 = require("./products-invoice-create-or-connect-without-case-log.input");
const products_invoice_upsert_without_case_log_input_1 = require("./products-invoice-upsert-without-case-log.input");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const products_invoice_update_to_one_with_where_without_case_log_input_1 = require("./products-invoice-update-to-one-with-where-without-case-log.input");
let ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput = class ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_without_case_log_input_1.ProductsInvoiceCreateWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_create_without_case_log_input_1.ProductsInvoiceCreateWithoutCaseLogInput)
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_or_connect_without_case_log_input_1.ProductsInvoiceCreateOrConnectWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_create_or_connect_without_case_log_input_1.ProductsInvoiceCreateOrConnectWithoutCaseLogInput)
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_upsert_without_case_log_input_1.ProductsInvoiceUpsertWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_upsert_without_case_log_input_1.ProductsInvoiceUpsertWithoutCaseLogInput)
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput)
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_to_one_with_where_without_case_log_input_1.ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => products_invoice_update_to_one_with_where_without_case_log_input_1.ProductsInvoiceUpdateToOneWithWhereWithoutCaseLogInput)
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "update", void 0);
ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput);
exports.ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput = ProductsInvoiceUpdateOneRequiredWithoutCaseLogNestedInput;
//# sourceMappingURL=products-invoice-update-one-required-without-case-log-nested.input.js.map