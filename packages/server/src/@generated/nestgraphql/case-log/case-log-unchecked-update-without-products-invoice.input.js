"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUncheckedUpdateWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let CaseLogUncheckedUpdateWithoutProductsInvoiceInput = class CaseLogUncheckedUpdateWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput.prototype, "deleted", void 0);
CaseLogUncheckedUpdateWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUncheckedUpdateWithoutProductsInvoiceInput);
exports.CaseLogUncheckedUpdateWithoutProductsInvoiceInput = CaseLogUncheckedUpdateWithoutProductsInvoiceInput;
//# sourceMappingURL=case-log-unchecked-update-without-products-invoice.input.js.map