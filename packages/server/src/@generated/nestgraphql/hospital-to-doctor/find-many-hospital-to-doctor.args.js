"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyHospitalToDoctorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_where_input_1 = require("./hospital-to-doctor-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_order_by_with_relation_input_1 = require("./hospital-to-doctor-order-by-with-relation.input");
const hospital_to_doctor_where_unique_input_1 = require("./hospital-to-doctor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const hospital_to_doctor_scalar_field_enum_1 = require("./hospital-to-doctor-scalar-field.enum");
let FindManyHospitalToDoctorArgs = class FindManyHospitalToDoctorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_input_1.HospitalToDoctorWhereInput)
], FindManyHospitalToDoctorArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_order_by_with_relation_input_1.HospitalToDoctorOrderByWithRelationInput], { nullable: true })
], FindManyHospitalToDoctorArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput, { nullable: true })
], FindManyHospitalToDoctorArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyHospitalToDoctorArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyHospitalToDoctorArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_scalar_field_enum_1.HospitalToDoctorScalarFieldEnum], { nullable: true })
], FindManyHospitalToDoctorArgs.prototype, "distinct", void 0);
FindManyHospitalToDoctorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyHospitalToDoctorArgs);
exports.FindManyHospitalToDoctorArgs = FindManyHospitalToDoctorArgs;
//# sourceMappingURL=find-many-hospital-to-doctor.args.js.map