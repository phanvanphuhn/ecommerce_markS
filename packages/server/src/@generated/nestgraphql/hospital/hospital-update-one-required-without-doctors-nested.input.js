"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalUpdateOneRequiredWithoutDoctorsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_create_without_doctors_input_1 = require("./hospital-create-without-doctors.input");
const class_transformer_1 = require("class-transformer");
const hospital_create_or_connect_without_doctors_input_1 = require("./hospital-create-or-connect-without-doctors.input");
const hospital_upsert_without_doctors_input_1 = require("./hospital-upsert-without-doctors.input");
const hospital_where_unique_input_1 = require("./hospital-where-unique.input");
const hospital_update_to_one_with_where_without_doctors_input_1 = require("./hospital-update-to-one-with-where-without-doctors.input");
let HospitalUpdateOneRequiredWithoutDoctorsNestedInput = class HospitalUpdateOneRequiredWithoutDoctorsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_create_without_doctors_input_1.HospitalCreateWithoutDoctorsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_create_without_doctors_input_1.HospitalCreateWithoutDoctorsInput)
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_create_or_connect_without_doctors_input_1.HospitalCreateOrConnectWithoutDoctorsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_create_or_connect_without_doctors_input_1.HospitalCreateOrConnectWithoutDoctorsInput)
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_upsert_without_doctors_input_1.HospitalUpsertWithoutDoctorsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_upsert_without_doctors_input_1.HospitalUpsertWithoutDoctorsInput)
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput)
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_update_to_one_with_where_without_doctors_input_1.HospitalUpdateToOneWithWhereWithoutDoctorsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_update_to_one_with_where_without_doctors_input_1.HospitalUpdateToOneWithWhereWithoutDoctorsInput)
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput.prototype, "update", void 0);
HospitalUpdateOneRequiredWithoutDoctorsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalUpdateOneRequiredWithoutDoctorsNestedInput);
exports.HospitalUpdateOneRequiredWithoutDoctorsNestedInput = HospitalUpdateOneRequiredWithoutDoctorsNestedInput;
//# sourceMappingURL=hospital-update-one-required-without-doctors-nested.input.js.map