"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const specialty_enum_1 = require("../prisma/specialty.enum");
const division_enum_1 = require("../prisma/division.enum");
const doctor_count_aggregate_output_1 = require("./doctor-count-aggregate.output");
const doctor_avg_aggregate_output_1 = require("./doctor-avg-aggregate.output");
const doctor_sum_aggregate_output_1 = require("./doctor-sum-aggregate.output");
const doctor_min_aggregate_output_1 = require("./doctor-min-aggregate.output");
const doctor_max_aggregate_output_1 = require("./doctor-max-aggregate.output");
let DoctorGroupBy = class DoctorGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DoctorGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], DoctorGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DoctorGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [specialty_enum_1.Specialty], { nullable: true })
], DoctorGroupBy.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => [division_enum_1.Division], { nullable: true })
], DoctorGroupBy.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_count_aggregate_output_1.DoctorCountAggregate, { nullable: true })
], DoctorGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_avg_aggregate_output_1.DoctorAvgAggregate, { nullable: true })
], DoctorGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_sum_aggregate_output_1.DoctorSumAggregate, { nullable: true })
], DoctorGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_min_aggregate_output_1.DoctorMinAggregate, { nullable: true })
], DoctorGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_max_aggregate_output_1.DoctorMaxAggregate, { nullable: true })
], DoctorGroupBy.prototype, "_max", void 0);
DoctorGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], DoctorGroupBy);
exports.DoctorGroupBy = DoctorGroupBy;
//# sourceMappingURL=doctor-group-by.output.js.map