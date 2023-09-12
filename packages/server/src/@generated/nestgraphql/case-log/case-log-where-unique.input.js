"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_where_input_1 = require("./case-log-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const doctor_relation_filter_input_1 = require("../doctor/doctor-relation-filter.input");
const products_invoice_relation_filter_input_1 = require("../products-invoice/products-invoice-relation-filter.input");
const schedule_relation_filter_input_1 = require("../schedule/schedule-relation-filter.input");
let CaseLogWhereUniqueInput = class CaseLogWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_input_1.CaseLogWhereInput], { nullable: true })
], CaseLogWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_input_1.CaseLogWhereInput], { nullable: true })
], CaseLogWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_input_1.CaseLogWhereInput], { nullable: true })
], CaseLogWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_relation_filter_input_1.DoctorRelationFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_relation_filter_input_1.ProductsInvoiceRelationFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_relation_filter_input_1.ScheduleRelationFilter, { nullable: true })
], CaseLogWhereUniqueInput.prototype, "schedule", void 0);
CaseLogWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogWhereUniqueInput);
exports.CaseLogWhereUniqueInput = CaseLogWhereUniqueInput;
//# sourceMappingURL=case-log-where-unique.input.js.map