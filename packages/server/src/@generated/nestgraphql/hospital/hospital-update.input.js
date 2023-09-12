"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_to_doctor_update_many_without_hospital_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-update-many-without-hospital-nested.input");
let HospitalUpdateInput = class HospitalUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], HospitalUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], HospitalUpdateInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_update_many_without_hospital_nested_input_1.HospitalToDoctorUpdateManyWithoutHospitalNestedInput, { nullable: true })
], HospitalUpdateInput.prototype, "doctors", void 0);
HospitalUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalUpdateInput);
exports.HospitalUpdateInput = HospitalUpdateInput;
//# sourceMappingURL=hospital-update.input.js.map