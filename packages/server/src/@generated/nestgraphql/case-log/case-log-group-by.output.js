"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const case_log_count_aggregate_output_1 = require("./case-log-count-aggregate.output");
const case_log_avg_aggregate_output_1 = require("./case-log-avg-aggregate.output");
const case_log_sum_aggregate_output_1 = require("./case-log-sum-aggregate.output");
const case_log_min_aggregate_output_1 = require("./case-log-min-aggregate.output");
const case_log_max_aggregate_output_1 = require("./case-log-max-aggregate.output");
let CaseLogGroupBy = class CaseLogGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLogGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CaseLogGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CaseLogGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], CaseLogGroupBy.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], CaseLogGroupBy.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogGroupBy.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLogGroupBy.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLogGroupBy.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogGroupBy.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_count_aggregate_output_1.CaseLogCountAggregate, { nullable: true })
], CaseLogGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_avg_aggregate_output_1.CaseLogAvgAggregate, { nullable: true })
], CaseLogGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_sum_aggregate_output_1.CaseLogSumAggregate, { nullable: true })
], CaseLogGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_min_aggregate_output_1.CaseLogMinAggregate, { nullable: true })
], CaseLogGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_max_aggregate_output_1.CaseLogMaxAggregate, { nullable: true })
], CaseLogGroupBy.prototype, "_max", void 0);
CaseLogGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CaseLogGroupBy);
exports.CaseLogGroupBy = CaseLogGroupBy;
//# sourceMappingURL=case-log-group-by.output.js.map