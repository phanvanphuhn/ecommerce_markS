"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateManyWithoutDoctorNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_without_doctor_input_1 = require("./case-log-create-without-doctor.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_or_connect_without_doctor_input_1 = require("./case-log-create-or-connect-without-doctor.input");
const case_log_upsert_with_where_unique_without_doctor_input_1 = require("./case-log-upsert-with-where-unique-without-doctor.input");
const case_log_create_many_doctor_input_envelope_input_1 = require("./case-log-create-many-doctor-input-envelope.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const case_log_update_with_where_unique_without_doctor_input_1 = require("./case-log-update-with-where-unique-without-doctor.input");
const case_log_update_many_with_where_without_doctor_input_1 = require("./case-log-update-many-with-where-without-doctor.input");
const case_log_scalar_where_input_1 = require("./case-log-scalar-where.input");
let CaseLogUpdateManyWithoutDoctorNestedInput = class CaseLogUpdateManyWithoutDoctorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_without_doctor_input_1.CaseLogCreateWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_without_doctor_input_1.CaseLogCreateWithoutDoctorInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_or_connect_without_doctor_input_1.CaseLogCreateOrConnectWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_or_connect_without_doctor_input_1.CaseLogCreateOrConnectWithoutDoctorInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_upsert_with_where_unique_without_doctor_input_1.CaseLogUpsertWithWhereUniqueWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_upsert_with_where_unique_without_doctor_input_1.CaseLogUpsertWithWhereUniqueWithoutDoctorInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_many_doctor_input_envelope_input_1.CaseLogCreateManyDoctorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_many_doctor_input_envelope_input_1.CaseLogCreateManyDoctorInputEnvelope)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_update_with_where_unique_without_doctor_input_1.CaseLogUpdateWithWhereUniqueWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_with_where_unique_without_doctor_input_1.CaseLogUpdateWithWhereUniqueWithoutDoctorInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_update_many_with_where_without_doctor_input_1.CaseLogUpdateManyWithWhereWithoutDoctorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_many_with_where_without_doctor_input_1.CaseLogUpdateManyWithWhereWithoutDoctorInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_scalar_where_input_1.CaseLogScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_scalar_where_input_1.CaseLogScalarWhereInput)
], CaseLogUpdateManyWithoutDoctorNestedInput.prototype, "deleteMany", void 0);
CaseLogUpdateManyWithoutDoctorNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateManyWithoutDoctorNestedInput);
exports.CaseLogUpdateManyWithoutDoctorNestedInput = CaseLogUpdateManyWithoutDoctorNestedInput;
//# sourceMappingURL=case-log-update-many-without-doctor-nested.input.js.map