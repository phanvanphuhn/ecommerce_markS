"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalUpdateToOneWithWhereWithoutDoctorsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_input_1 = require("./hospital-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_update_without_doctors_input_1 = require("./hospital-update-without-doctors.input");
let HospitalUpdateToOneWithWhereWithoutDoctorsInput = class HospitalUpdateToOneWithWhereWithoutDoctorsInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_input_1.HospitalWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_input_1.HospitalWhereInput)
], HospitalUpdateToOneWithWhereWithoutDoctorsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_update_without_doctors_input_1.HospitalUpdateWithoutDoctorsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_update_without_doctors_input_1.HospitalUpdateWithoutDoctorsInput)
], HospitalUpdateToOneWithWhereWithoutDoctorsInput.prototype, "data", void 0);
HospitalUpdateToOneWithWhereWithoutDoctorsInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalUpdateToOneWithWhereWithoutDoctorsInput);
exports.HospitalUpdateToOneWithWhereWithoutDoctorsInput = HospitalUpdateToOneWithWhereWithoutDoctorsInput;
//# sourceMappingURL=hospital-update-to-one-with-where-without-doctors.input.js.map