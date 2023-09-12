"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateOneRequiredWithoutCaseLogNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_create_without_case_log_input_1 = require("./doctor-create-without-case-log.input");
const class_transformer_1 = require("class-transformer");
const doctor_create_or_connect_without_case_log_input_1 = require("./doctor-create-or-connect-without-case-log.input");
const doctor_upsert_without_case_log_input_1 = require("./doctor-upsert-without-case-log.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
const doctor_update_to_one_with_where_without_case_log_input_1 = require("./doctor-update-to-one-with-where-without-case-log.input");
let DoctorUpdateOneRequiredWithoutCaseLogNestedInput = class DoctorUpdateOneRequiredWithoutCaseLogNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_create_without_case_log_input_1.DoctorCreateWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_without_case_log_input_1.DoctorCreateWithoutCaseLogInput)
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_or_connect_without_case_log_input_1.DoctorCreateOrConnectWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_or_connect_without_case_log_input_1.DoctorCreateOrConnectWithoutCaseLogInput)
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_upsert_without_case_log_input_1.DoctorUpsertWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_upsert_without_case_log_input_1.DoctorUpsertWithoutCaseLogInput)
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput)
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_to_one_with_where_without_case_log_input_1.DoctorUpdateToOneWithWhereWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_update_to_one_with_where_without_case_log_input_1.DoctorUpdateToOneWithWhereWithoutCaseLogInput)
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "update", void 0);
DoctorUpdateOneRequiredWithoutCaseLogNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUpdateOneRequiredWithoutCaseLogNestedInput);
exports.DoctorUpdateOneRequiredWithoutCaseLogNestedInput = DoctorUpdateOneRequiredWithoutCaseLogNestedInput;
//# sourceMappingURL=doctor-update-one-required-without-case-log-nested.input.js.map