"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInvoiceCreateOrConnectWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const products_invoice_where_unique_input_1 = require("./products-invoice-where-unique.input");
const class_transformer_1 = require("class-transformer");
const products_invoice_create_without_case_log_input_1 = require("./products-invoice-create-without-case-log.input");
let ProductsInvoiceCreateOrConnectWithoutCaseLogInput = class ProductsInvoiceCreateOrConnectWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_where_unique_input_1.ProductsInvoiceWhereUniqueInput)
], ProductsInvoiceCreateOrConnectWithoutCaseLogInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_without_case_log_input_1.ProductsInvoiceCreateWithoutCaseLogInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => products_invoice_create_without_case_log_input_1.ProductsInvoiceCreateWithoutCaseLogInput)
], ProductsInvoiceCreateOrConnectWithoutCaseLogInput.prototype, "create", void 0);
ProductsInvoiceCreateOrConnectWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ProductsInvoiceCreateOrConnectWithoutCaseLogInput);
exports.ProductsInvoiceCreateOrConnectWithoutCaseLogInput = ProductsInvoiceCreateOrConnectWithoutCaseLogInput;
//# sourceMappingURL=products-invoice-create-or-connect-without-case-log.input.js.map