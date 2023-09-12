"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogCreateWithoutAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_create_nested_one_without_case_log_input_1 = require("../doctor/doctor-create-nested-one-without-case-log.input");
const products_invoice_create_nested_one_without_case_log_input_1 = require("../products-invoice/products-invoice-create-nested-one-without-case-log.input");
const schedule_create_nested_one_without_case_log_input_1 = require("../schedule/schedule-create-nested-one-without-case-log.input");
let CaseLogCreateWithoutAccountInput = class CaseLogCreateWithoutAccountInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_nested_one_without_case_log_input_1.DoctorCreateNestedOneWithoutCaseLogInput, { nullable: false })
], CaseLogCreateWithoutAccountInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_create_nested_one_without_case_log_input_1.ProductsInvoiceCreateNestedOneWithoutCaseLogInput, { nullable: true })
], CaseLogCreateWithoutAccountInput.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_nested_one_without_case_log_input_1.ScheduleCreateNestedOneWithoutCaseLogInput, { nullable: false })
], CaseLogCreateWithoutAccountInput.prototype, "schedule", void 0);
CaseLogCreateWithoutAccountInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogCreateWithoutAccountInput);
exports.CaseLogCreateWithoutAccountInput = CaseLogCreateWithoutAccountInput;
//# sourceMappingURL=case-log-create-without-account.input.js.map