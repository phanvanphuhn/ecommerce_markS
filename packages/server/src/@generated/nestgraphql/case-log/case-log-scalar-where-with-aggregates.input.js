"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CaseLogScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
let CaseLogScalarWhereWithAggregatesInput = CaseLogScalarWhereWithAggregatesInput_1 = class CaseLogScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereWithAggregatesInput_1], { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereWithAggregatesInput_1], { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CaseLogScalarWhereWithAggregatesInput_1], { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], CaseLogScalarWhereWithAggregatesInput.prototype, "deleted", void 0);
CaseLogScalarWhereWithAggregatesInput = CaseLogScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CaseLogScalarWhereWithAggregatesInput);
exports.CaseLogScalarWhereWithAggregatesInput = CaseLogScalarWhereWithAggregatesInput;
//# sourceMappingURL=case-log-scalar-where-with-aggregates.input.js.map