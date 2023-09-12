"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateWithoutAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_update_one_required_without_case_log_nested_input_1 = require("../doctor/doctor-update-one-required-without-case-log-nested.input");
const products_invoice_update_one_without_case_log_nested_input_1 = require("../products-invoice/products-invoice-update-one-without-case-log-nested.input");
const schedule_update_one_required_without_case_log_nested_input_1 = require("../schedule/schedule-update-one-required-without-case-log-nested.input");
let CaseLogUpdateWithoutAccountInput = class CaseLogUpdateWithoutAccountInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_one_required_without_case_log_nested_input_1.DoctorUpdateOneRequiredWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_update_one_without_case_log_nested_input_1.ProductsInvoiceUpdateOneWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_one_required_without_case_log_nested_input_1.ScheduleUpdateOneRequiredWithoutCaseLogNestedInput, { nullable: true })
], CaseLogUpdateWithoutAccountInput.prototype, "schedule", void 0);
CaseLogUpdateWithoutAccountInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateWithoutAccountInput);
exports.CaseLogUpdateWithoutAccountInput = CaseLogUpdateWithoutAccountInput;
//# sourceMappingURL=case-log-update-without-account.input.js.map