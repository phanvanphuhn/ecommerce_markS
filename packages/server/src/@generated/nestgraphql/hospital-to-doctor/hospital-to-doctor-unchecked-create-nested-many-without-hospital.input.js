"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_create_without_hospital_input_1 = require("./hospital-to-doctor-create-without-hospital.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_create_or_connect_without_hospital_input_1 = require("./hospital-to-doctor-create-or-connect-without-hospital.input");
const hospital_to_doctor_create_many_hospital_input_envelope_input_1 = require("./hospital-to-doctor-create-many-hospital-input-envelope.input");
const hospital_to_doctor_where_unique_input_1 = require("./hospital-to-doctor-where-unique.input");
let HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput = class HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput {
};
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_create_without_hospital_input_1.HospitalToDoctorCreateWithoutHospitalInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_without_hospital_input_1.HospitalToDoctorCreateWithoutHospitalInput)
], HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_create_or_connect_without_hospital_input_1.HospitalToDoctorCreateOrConnectWithoutHospitalInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_or_connect_without_hospital_input_1.HospitalToDoctorCreateOrConnectWithoutHospitalInput)
], HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_create_many_hospital_input_envelope_input_1.HospitalToDoctorCreateManyHospitalInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_many_hospital_input_envelope_input_1.HospitalToDoctorCreateManyHospitalInputEnvelope)
], HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput)
], HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput.prototype, "connect", void 0);
HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput);
exports.HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput = HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput;
//# sourceMappingURL=hospital-to-doctor-unchecked-create-nested-many-without-hospital.input.js.map