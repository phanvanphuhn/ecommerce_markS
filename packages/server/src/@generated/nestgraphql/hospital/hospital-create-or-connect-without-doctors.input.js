"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalCreateOrConnectWithoutDoctorsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_unique_input_1 = require("./hospital-where-unique.input");
const class_transformer_1 = require("class-transformer");
const hospital_create_without_doctors_input_1 = require("./hospital-create-without-doctors.input");
let HospitalCreateOrConnectWithoutDoctorsInput = class HospitalCreateOrConnectWithoutDoctorsInput {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput)
], HospitalCreateOrConnectWithoutDoctorsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_create_without_doctors_input_1.HospitalCreateWithoutDoctorsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_create_without_doctors_input_1.HospitalCreateWithoutDoctorsInput)
], HospitalCreateOrConnectWithoutDoctorsInput.prototype, "create", void 0);
HospitalCreateOrConnectWithoutDoctorsInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalCreateOrConnectWithoutDoctorsInput);
exports.HospitalCreateOrConnectWithoutDoctorsInput = HospitalCreateOrConnectWithoutDoctorsInput;
//# sourceMappingURL=hospital-create-or-connect-without-doctors.input.js.map