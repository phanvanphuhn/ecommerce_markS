"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorCreateNestedManyWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_create_without_doctor_input_1 = require("./hospital-to-doctor-create-without-doctor.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_create_or_connect_without_doctor_input_1 = require("./hospital-to-doctor-create-or-connect-without-doctor.input");
const hospital_to_doctor_create_many_doctor_input_envelope_input_1 = require("./hospital-to-doctor-create-many-doctor-input-envelope.input");
const hospital_to_doctor_where_unique_input_1 = require("./hospital-to-doctor-where-unique.input");
let HospitalToDoctorCreateNestedManyWithoutDoctorInput = class HospitalToDoctorCreateNestedManyWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_create_without_doctor_input_1.HospitalToDoctorCreateWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_without_doctor_input_1.HospitalToDoctorCreateWithoutDoctorInput)
], HospitalToDoctorCreateNestedManyWithoutDoctorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_create_or_connect_without_doctor_input_1.HospitalToDoctorCreateOrConnectWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_or_connect_without_doctor_input_1.HospitalToDoctorCreateOrConnectWithoutDoctorInput)
], HospitalToDoctorCreateNestedManyWithoutDoctorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_create_many_doctor_input_envelope_input_1.HospitalToDoctorCreateManyDoctorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_many_doctor_input_envelope_input_1.HospitalToDoctorCreateManyDoctorInputEnvelope)
], HospitalToDoctorCreateNestedManyWithoutDoctorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput)
], HospitalToDoctorCreateNestedManyWithoutDoctorInput.prototype, "connect", void 0);
HospitalToDoctorCreateNestedManyWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorCreateNestedManyWithoutDoctorInput);
exports.HospitalToDoctorCreateNestedManyWithoutDoctorInput = HospitalToDoctorCreateNestedManyWithoutDoctorInput;
//# sourceMappingURL=hospital-to-doctor-create-nested-many-without-doctor.input.js.map