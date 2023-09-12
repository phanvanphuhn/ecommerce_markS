"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_to_doctor_unchecked_create_nested_many_without_hospital_input_1 = require("../hospital-to-doctor/hospital-to-doctor-unchecked-create-nested-many-without-hospital.input");
let HospitalUncheckedCreateInput = class HospitalUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], HospitalUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], HospitalUncheckedCreateInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_unchecked_create_nested_many_without_hospital_input_1.HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput, { nullable: true })
], HospitalUncheckedCreateInput.prototype, "doctors", void 0);
HospitalUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalUncheckedCreateInput);
exports.HospitalUncheckedCreateInput = HospitalUncheckedCreateInput;
//# sourceMappingURL=hospital-unchecked-create.input.js.map