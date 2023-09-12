"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneHospitalToDoctorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_where_unique_input_1 = require("./hospital-to-doctor-where-unique.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_create_input_1 = require("./hospital-to-doctor-create.input");
const hospital_to_doctor_update_input_1 = require("./hospital-to-doctor-update.input");
let UpsertOneHospitalToDoctorArgs = class UpsertOneHospitalToDoctorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput)
], UpsertOneHospitalToDoctorArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_create_input_1.HospitalToDoctorCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_input_1.HospitalToDoctorCreateInput)
], UpsertOneHospitalToDoctorArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_input_1.HospitalToDoctorUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_update_input_1.HospitalToDoctorUpdateInput)
], UpsertOneHospitalToDoctorArgs.prototype, "update", void 0);
UpsertOneHospitalToDoctorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneHospitalToDoctorArgs);
exports.UpsertOneHospitalToDoctorArgs = UpsertOneHospitalToDoctorArgs;
//# sourceMappingURL=upsert-one-hospital-to-doctor.args.js.map