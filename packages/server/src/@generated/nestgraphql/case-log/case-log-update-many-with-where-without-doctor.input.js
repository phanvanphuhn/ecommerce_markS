"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateManyWithWhereWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_scalar_where_input_1 = require("./case-log-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const case_log_update_many_mutation_input_1 = require("./case-log-update-many-mutation.input");
let CaseLogUpdateManyWithWhereWithoutDoctorInput = class CaseLogUpdateManyWithWhereWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_scalar_where_input_1.CaseLogScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_scalar_where_input_1.CaseLogScalarWhereInput)
], CaseLogUpdateManyWithWhereWithoutDoctorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_many_mutation_input_1.CaseLogUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => case_log_update_many_mutation_input_1.CaseLogUpdateManyMutationInput)
], CaseLogUpdateManyWithWhereWithoutDoctorInput.prototype, "data", void 0);
CaseLogUpdateManyWithWhereWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateManyWithWhereWithoutDoctorInput);
exports.CaseLogUpdateManyWithWhereWithoutDoctorInput = CaseLogUpdateManyWithWhereWithoutDoctorInput;
//# sourceMappingURL=case-log-update-many-with-where-without-doctor.input.js.map