"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CaseLogScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
let CaseLogScalarWhereInput = CaseLogScalarWhereInput_1 = class CaseLogScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereInput_1], { nullable: true })
], CaseLogScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereInput_1], { nullable: true })
], CaseLogScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereInput_1], { nullable: true })
], CaseLogScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], CaseLogScalarWhereInput.prototype, "deleted", void 0);
CaseLogScalarWhereInput = CaseLogScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CaseLogScalarWhereInput);
exports.CaseLogScalarWhereInput = CaseLogScalarWhereInput;
//# sourceMappingURL=case-log-scalar-where.input.js.map