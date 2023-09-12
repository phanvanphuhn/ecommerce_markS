"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHospitalToDoctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_count_aggregate_output_1 = require("./hospital-to-doctor-count-aggregate.output");
const hospital_to_doctor_avg_aggregate_output_1 = require("./hospital-to-doctor-avg-aggregate.output");
const hospital_to_doctor_sum_aggregate_output_1 = require("./hospital-to-doctor-sum-aggregate.output");
const hospital_to_doctor_min_aggregate_output_1 = require("./hospital-to-doctor-min-aggregate.output");
const hospital_to_doctor_max_aggregate_output_1 = require("./hospital-to-doctor-max-aggregate.output");
let AggregateHospitalToDoctor = class AggregateHospitalToDoctor {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_count_aggregate_output_1.HospitalToDoctorCountAggregate, { nullable: true })
], AggregateHospitalToDoctor.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_avg_aggregate_output_1.HospitalToDoctorAvgAggregate, { nullable: true })
], AggregateHospitalToDoctor.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_sum_aggregate_output_1.HospitalToDoctorSumAggregate, { nullable: true })
], AggregateHospitalToDoctor.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_min_aggregate_output_1.HospitalToDoctorMinAggregate, { nullable: true })
], AggregateHospitalToDoctor.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_max_aggregate_output_1.HospitalToDoctorMaxAggregate, { nullable: true })
], AggregateHospitalToDoctor.prototype, "_max", void 0);
AggregateHospitalToDoctor = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateHospitalToDoctor);
exports.AggregateHospitalToDoctor = AggregateHospitalToDoctor;
//# sourceMappingURL=aggregate-hospital-to-doctor.output.js.map