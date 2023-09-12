"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCreateNestedOneWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_create_without_case_log_input_1 = require("./doctor-create-without-case-log.input");
const class_transformer_1 = require("class-transformer");
const doctor_create_or_connect_without_case_log_input_1 = require("./doctor-create-or-connect-without-case-log.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
let DoctorCreateNestedOneWithoutCaseLogInput = class DoctorCreateNestedOneWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_create_without_case_log_input_1.DoctorCreateWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_without_case_log_input_1.DoctorCreateWithoutCaseLogInput)
], DoctorCreateNestedOneWithoutCaseLogInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_or_connect_without_case_log_input_1.DoctorCreateOrConnectWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_or_connect_without_case_log_input_1.DoctorCreateOrConnectWithoutCaseLogInput)
], DoctorCreateNestedOneWithoutCaseLogInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput)
], DoctorCreateNestedOneWithoutCaseLogInput.prototype, "connect", void 0);
DoctorCreateNestedOneWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorCreateNestedOneWithoutCaseLogInput);
exports.DoctorCreateNestedOneWithoutCaseLogInput = DoctorCreateNestedOneWithoutCaseLogInput;
//# sourceMappingURL=doctor-create-nested-one-without-case-log.input.js.map