"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDoctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_count_aggregate_output_1 = require("./doctor-count-aggregate.output");
const doctor_avg_aggregate_output_1 = require("./doctor-avg-aggregate.output");
const doctor_sum_aggregate_output_1 = require("./doctor-sum-aggregate.output");
const doctor_min_aggregate_output_1 = require("./doctor-min-aggregate.output");
const doctor_max_aggregate_output_1 = require("./doctor-max-aggregate.output");
let AggregateDoctor = class AggregateDoctor {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_count_aggregate_output_1.DoctorCountAggregate, { nullable: true })
], AggregateDoctor.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_avg_aggregate_output_1.DoctorAvgAggregate, { nullable: true })
], AggregateDoctor.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_sum_aggregate_output_1.DoctorSumAggregate, { nullable: true })
], AggregateDoctor.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_min_aggregate_output_1.DoctorMinAggregate, { nullable: true })
], AggregateDoctor.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_max_aggregate_output_1.DoctorMaxAggregate, { nullable: true })
], AggregateDoctor.prototype, "_max", void 0);
AggregateDoctor = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateDoctor);
exports.AggregateDoctor = AggregateDoctor;
//# sourceMappingURL=aggregate-doctor.output.js.map