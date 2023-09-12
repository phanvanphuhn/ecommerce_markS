"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateWithoutScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_one_required_without_case_log_nested_input_1 = require("../user/user-update-one-required-without-case-log-nested.input");
const doctor_update_one_required_without_case_log_nested_input_1 = require("../doctor/doctor-update-one-required-without-case-log-nested.input");
const products_invoice_update_one_without_case_log_nested_input_1 = require("../products-invoice/products-invoice-update-one-without-case-log-nested.input");
let CaseLogUpdateWithoutScheduleInput = class CaseLogUpdateWithoutScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_case_log_nested_input_1.UserUpdateOneRequiredWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_one_required_without_case_log_nested_input_1.DoctorUpdateOneRequiredWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_one_without_case_log_nested_input_1.ProductsInvoiceUpdateOneWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutScheduleInput.prototype, "productsInvoice", void 0);
CaseLogUpdateWithoutScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateWithoutScheduleInput);
exports.CaseLogUpdateWithoutScheduleInput = CaseLogUpdateWithoutScheduleInput;
//# sourceMappingURL=case-log-update-without-schedule.input.js.map