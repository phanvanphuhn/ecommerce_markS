"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CaseLogWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
const products_invoice_relation_filter_input_1 = require("../products-invoice/products-invoice-relation-filter.input");
const schedule_relation_filter_input_1 = require("../schedule/schedule-relation-filter.input");
let CaseLogWhereInput = CaseLogWhereInput_1 = class CaseLogWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CaseLogWhereInput_1], { nullable: true })
], CaseLogWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogWhereInput_1], { nullable: true })
], CaseLogWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogWhereInput_1], { nullable: true })
], CaseLogWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogWhereInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogWhereInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogWhereInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogWhereInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogWhereInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], CaseLogWhereInput.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], CaseLogWhereInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_relation_filter_input_1.ProductsInvoiceRelationFilter, { nullable: true })
], CaseLogWhereInput.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_relation_filter_input_1.ScheduleRelationFilter, { nullable: true })
], CaseLogWhereInput.prototype, "schedule", void 0);
CaseLogWhereInput = CaseLogWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CaseLogWhereInput);
exports.CaseLogWhereInput = CaseLogWhereInput;
//# sourceMappingURL=case-log-where.input.js.map