"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_where_unique_input_1 = require("./hospital-to-doctor-where-unique.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_update_without_doctor_input_1 = require("./hospital-to-doctor-update-without-doctor.input");
const hospital_to_doctor_create_without_doctor_input_1 = require("./hospital-to-doctor-create-without-doctor.input");
let HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput = class HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_where_unique_input_1.HospitalToDoctorWhereUniqueInput)
], HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_without_doctor_input_1.HospitalToDoctorUpdateWithoutDoctorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_update_without_doctor_input_1.HospitalToDoctorUpdateWithoutDoctorInput)
], HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_create_without_doctor_input_1.HospitalToDoctorCreateWithoutDoctorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_create_without_doctor_input_1.HospitalToDoctorCreateWithoutDoctorInput)
], HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput.prototype, "create", void 0);
HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput);
exports.HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput = HospitalToDoctorUpsertWithWhereUniqueWithoutDoctorInput;
//# sourceMappingURL=hospital-to-doctor-upsert-with-where-unique-without-doctor.input.js.map