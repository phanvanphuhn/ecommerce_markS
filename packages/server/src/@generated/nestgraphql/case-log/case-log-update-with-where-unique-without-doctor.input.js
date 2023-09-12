"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateWithWhereUniqueWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const class_transformer_1 = require("class-transformer");
const case_log_update_without_doctor_input_1 = require("./case-log-update-without-doctor.input");
let CaseLogUpdateWithWhereUniqueWithoutDoctorInput = class CaseLogUpdateWithWhereUniqueWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateWithWhereUniqueWithoutDoctorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_without_doctor_input_1.CaseLogUpdateWithoutDoctorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_update_without_doctor_input_1.CaseLogUpdateWithoutDoctorInput)
], CaseLogUpdateWithWhereUniqueWithoutDoctorInput.prototype, "data", void 0);
CaseLogUpdateWithWhereUniqueWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateWithWhereUniqueWithoutDoctorInput);
exports.CaseLogUpdateWithWhereUniqueWithoutDoctorInput = CaseLogUpdateWithWhereUniqueWithoutDoctorInput;
//# sourceMappingURL=case-log-update-with-where-unique-without-doctor.input.js.map