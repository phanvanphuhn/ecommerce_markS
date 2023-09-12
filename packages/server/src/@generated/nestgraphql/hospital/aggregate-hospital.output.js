"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHospital = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_count_aggregate_output_1 = require("./hospital-count-aggregate.output");
const hospital_avg_aggregate_output_1 = require("./hospital-avg-aggregate.output");
const hospital_sum_aggregate_output_1 = require("./hospital-sum-aggregate.output");
const hospital_min_aggregate_output_1 = require("./hospital-min-aggregate.output");
const hospital_max_aggregate_output_1 = require("./hospital-max-aggregate.output");
let AggregateHospital = class AggregateHospital {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_count_aggregate_output_1.HospitalCountAggregate, { nullable: true })
], AggregateHospital.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_avg_aggregate_output_1.HospitalAvgAggregate, { nullable: true })
], AggregateHospital.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_sum_aggregate_output_1.HospitalSumAggregate, { nullable: true })
], AggregateHospital.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_min_aggregate_output_1.HospitalMinAggregate, { nullable: true })
], AggregateHospital.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_max_aggregate_output_1.HospitalMaxAggregate, { nullable: true })
], AggregateHospital.prototype, "_max", void 0);
AggregateHospital = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateHospital);
exports.AggregateHospital = AggregateHospital;
//# sourceMappingURL=aggregate-hospital.output.js.map