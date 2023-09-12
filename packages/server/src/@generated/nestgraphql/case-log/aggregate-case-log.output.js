"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCaseLog = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_count_aggregate_output_1 = require("./case-log-count-aggregate.output");
const case_log_avg_aggregate_output_1 = require("./case-log-avg-aggregate.output");
const case_log_sum_aggregate_output_1 = require("./case-log-sum-aggregate.output");
const case_log_min_aggregate_output_1 = require("./case-log-min-aggregate.output");
const case_log_max_aggregate_output_1 = require("./case-log-max-aggregate.output");
let AggregateCaseLog = class AggregateCaseLog {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_count_aggregate_output_1.CaseLogCountAggregate, { nullable: true })
], AggregateCaseLog.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_avg_aggregate_output_1.CaseLogAvgAggregate, { nullable: true })
], AggregateCaseLog.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_sum_aggregate_output_1.CaseLogSumAggregate, { nullable: true })
], AggregateCaseLog.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_min_aggregate_output_1.CaseLogMinAggregate, { nullable: true })
], AggregateCaseLog.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_max_aggregate_output_1.CaseLogMaxAggregate, { nullable: true })
], AggregateCaseLog.prototype, "_max", void 0);
AggregateCaseLog = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCaseLog);
exports.AggregateCaseLog = AggregateCaseLog;
//# sourceMappingURL=aggregate-case-log.output.js.map