"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_scalar_where_input_1 = require("./hospital-to-doctor-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_to_doctor_unchecked_update_many_without_doctor_input_1 = require("./hospital-to-doctor-unchecked-update-many-without-doctor.input");
let HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput = class HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_scalar_where_input_1.HospitalToDoctorScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_scalar_where_input_1.HospitalToDoctorScalarWhereInput)
], HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_unchecked_update_many_without_doctor_input_1.HospitalToDoctorUncheckedUpdateManyWithoutDoctorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_to_doctor_unchecked_update_many_without_doctor_input_1.HospitalToDoctorUncheckedUpdateManyWithoutDoctorInput)
], HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput.prototype, "data", void 0);
HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput);
exports.HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput = HospitalToDoctorUpdateManyWithWhereWithoutDoctorInput;
//# sourceMappingURL=hospital-to-doctor-update-many-with-where-without-doctor.input.js.map