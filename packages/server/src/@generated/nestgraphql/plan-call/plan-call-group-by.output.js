"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_count_aggregate_output_1 = require("./plan-call-count-aggregate.output");
const plan_call_min_aggregate_output_1 = require("./plan-call-min-aggregate.output");
const plan_call_max_aggregate_output_1 = require("./plan-call-max-aggregate.output");
let PlanCallGroupBy = class PlanCallGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PlanCallGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PlanCallGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PlanCallGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallGroupBy.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallGroupBy.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PlanCallGroupBy.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallGroupBy.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_count_aggregate_output_1.PlanCallCountAggregate, { nullable: true })
], PlanCallGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_min_aggregate_output_1.PlanCallMinAggregate, { nullable: true })
], PlanCallGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_max_aggregate_output_1.PlanCallMaxAggregate, { nullable: true })
], PlanCallGroupBy.prototype, "_max", void 0);
PlanCallGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], PlanCallGroupBy);
exports.PlanCallGroupBy = PlanCallGroupBy;
//# sourceMappingURL=plan-call-group-by.output.js.map