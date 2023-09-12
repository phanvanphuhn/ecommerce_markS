"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_where_input_1 = require("./hospital-to-doctor-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_order_by_with_aggregation_input_1 = require("./hospital-to-doctor-order-by-with-aggregation.input");
const hospital_to_doctor_scalar_field_enum_1 = require("./hospital-to-doctor-scalar-field.enum");
const hospital_to_doctor_scalar_where_with_aggregates_input_1 = require("./hospital-to-doctor-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const hospital_to_doctor_count_aggregate_input_1 = require("./hospital-to-doctor-count-aggregate.input");
const hospital_to_doctor_avg_aggregate_input_1 = require("./hospital-to-doctor-avg-aggregate.input");
const hospital_to_doctor_sum_aggregate_input_1 = require("./hospital-to-doctor-sum-aggregate.input");
const hospital_to_doctor_min_aggregate_input_1 = require("./hospital-to-doctor-min-aggregate.input");
const hospital_to_doctor_max_aggregate_input_1 = require("./hospital-to-doctor-max-aggregate.input");
let HospitalToDoctorGroupByArgs = class HospitalToDoctorGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput)
], HospitalToDoctorGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_order_by_with_aggregation_input_1.HospitalToDoctorOrderByWithAggregationInput], { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_scalar_field_enum_1.HospitalToDoctorScalarFieldEnum], { nullable: false })
], HospitalToDoctorGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_scalar_where_with_aggregates_input_1.HospitalToDoctorScalarWhereWithAggregatesInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_count_aggregate_input_1.HospitalToDoctorCountAggregateInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_avg_aggregate_input_1.HospitalToDoctorAvgAggregateInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_sum_aggregate_input_1.HospitalToDoctorSumAggregateInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_min_aggregate_input_1.HospitalToDoctorMinAggregateInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_max_aggregate_input_1.HospitalToDoctorMaxAggregateInput, { nullable: true })
], HospitalToDoctorGroupByArgs.prototype, "_max", void 0);
HospitalToDoctorGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], HospitalToDoctorGroupByArgs);
exports.HospitalToDoctorGroupByArgs = HospitalToDoctorGroupByArgs;
//# sourceMappingURL=hospital-to-doctor-group-by.args.js.map