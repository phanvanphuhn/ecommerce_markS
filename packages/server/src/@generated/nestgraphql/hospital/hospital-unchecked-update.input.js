"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_to_doctor_unchecked_update_many_without_hospital_nested_input_1 = require("../hospital-to-doctor/hospital-to-doctor-unchecked-update-many-without-hospital-nested.input");
let HospitalUncheckedUpdateInput = class HospitalUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], HospitalUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], HospitalUncheckedUpdateInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_unchecked_update_many_without_hospital_nested_input_1.HospitalToDoctorUncheckedUpdateManyWithoutHospitalNestedInput, { nullable: true })
], HospitalUncheckedUpdateInput.prototype, "doctors", void 0);
HospitalUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalUncheckedUpdateInput);
exports.HospitalUncheckedUpdateInput = HospitalUncheckedUpdateInput;
//# sourceMappingURL=hospital-unchecked-update.input.js.map