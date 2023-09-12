"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogCreateManyDoctorInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_many_doctor_input_1 = require("./case-log-create-many-doctor.input");
const class_transformer_1 = require("class-transformer");
let CaseLogCreateManyDoctorInputEnvelope = class CaseLogCreateManyDoctorInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_many_doctor_input_1.CaseLogCreateManyDoctorInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_create_many_doctor_input_1.CaseLogCreateManyDoctorInput)
], CaseLogCreateManyDoctorInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CaseLogCreateManyDoctorInputEnvelope.prototype, "skipDuplicates", void 0);
CaseLogCreateManyDoctorInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], CaseLogCreateManyDoctorInputEnvelope);
exports.CaseLogCreateManyDoctorInputEnvelope = CaseLogCreateManyDoctorInputEnvelope;
//# sourceMappingURL=case-log-create-many-doctor-input-envelope.input.js.map