"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_count_aggregate_output_1 = require("./hospital-count-aggregate.output");
const hospital_avg_aggregate_output_1 = require("./hospital-avg-aggregate.output");
const hospital_sum_aggregate_output_1 = require("./hospital-sum-aggregate.output");
const hospital_min_aggregate_output_1 = require("./hospital-min-aggregate.output");
const hospital_max_aggregate_output_1 = require("./hospital-max-aggregate.output");
let HospitalGroupBy = class HospitalGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], HospitalGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], HospitalGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], HospitalGroupBy.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_count_aggregate_output_1.HospitalCountAggregate, { nullable: true })
], HospitalGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_avg_aggregate_output_1.HospitalAvgAggregate, { nullable: true })
], HospitalGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_sum_aggregate_output_1.HospitalSumAggregate, { nullable: true })
], HospitalGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_min_aggregate_output_1.HospitalMinAggregate, { nullable: true })
], HospitalGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_max_aggregate_output_1.HospitalMaxAggregate, { nullable: true })
], HospitalGroupBy.prototype, "_max", void 0);
HospitalGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], HospitalGroupBy);
exports.HospitalGroupBy = HospitalGroupBy;
//# sourceMappingURL=hospital-group-by.output.js.map