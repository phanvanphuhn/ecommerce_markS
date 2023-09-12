"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const case_log_count_order_by_aggregate_input_1 = require("./case-log-count-order-by-aggregate.input");
const case_log_avg_order_by_aggregate_input_1 = require("./case-log-avg-order-by-aggregate.input");
const case_log_max_order_by_aggregate_input_1 = require("./case-log-max-order-by-aggregate.input");
const case_log_min_order_by_aggregate_input_1 = require("./case-log-min-order-by-aggregate.input");
const case_log_sum_order_by_aggregate_input_1 = require("./case-log-sum-order-by-aggregate.input");
let CaseLogOrderByWithAggregationInput = class CaseLogOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_count_order_by_aggregate_input_1.CaseLogCountOrderByAggregateInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_avg_order_by_aggregate_input_1.CaseLogAvgOrderByAggregateInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_max_order_by_aggregate_input_1.CaseLogMaxOrderByAggregateInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_min_order_by_aggregate_input_1.CaseLogMinOrderByAggregateInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_sum_order_by_aggregate_input_1.CaseLogSumOrderByAggregateInput, { nullable: true })
], CaseLogOrderByWithAggregationInput.prototype, "_sum", void 0);
CaseLogOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogOrderByWithAggregationInput);
exports.CaseLogOrderByWithAggregationInput = CaseLogOrderByWithAggregationInput;
//# sourceMappingURL=case-log-order-by-with-aggregation.input.js.map