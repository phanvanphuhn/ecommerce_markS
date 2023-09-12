"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogCreateWithoutProductsInvoiceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_case_log_input_1 = require("../user/user-create-nested-one-without-case-log.input");
const doctor_create_nested_one_without_case_log_input_1 = require("../doctor/doctor-create-nested-one-without-case-log.input");
const schedule_create_nested_one_without_case_log_input_1 = require("../schedule/schedule-create-nested-one-without-case-log.input");
let CaseLogCreateWithoutProductsInvoiceInput = class CaseLogCreateWithoutProductsInvoiceInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_case_log_input_1.UserCreateNestedOneWithoutCaseLogInput, { nullable: false })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_nested_one_without_case_log_input_1.DoctorCreateNestedOneWithoutCaseLogInput, { nullable: false })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_nested_one_without_case_log_input_1.ScheduleCreateNestedOneWithoutCaseLogInput, { nullable: false })
], CaseLogCreateWithoutProductsInvoiceInput.prototype, "schedule", void 0);
CaseLogCreateWithoutProductsInvoiceInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogCreateWithoutProductsInvoiceInput);
exports.CaseLogCreateWithoutProductsInvoiceInput = CaseLogCreateWithoutProductsInvoiceInput;
//# sourceMappingURL=case-log-create-without-products-invoice.input.js.map