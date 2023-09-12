"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUncheckedCreateNestedManyWithoutAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_without_account_input_1 = require("./case-log-create-without-account.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_or_connect_without_account_input_1 = require("./case-log-create-or-connect-without-account.input");
const case_log_create_many_account_input_envelope_input_1 = require("./case-log-create-many-account-input-envelope.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
let CaseLogUncheckedCreateNestedManyWithoutAccountInput = class CaseLogUncheckedCreateNestedManyWithoutAccountInput {
};
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_without_account_input_1.CaseLogCreateWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_without_account_input_1.CaseLogCreateWithoutAccountInput)
], CaseLogUncheckedCreateNestedManyWithoutAccountInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_or_connect_without_account_input_1.CaseLogCreateOrConnectWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_or_connect_without_account_input_1.CaseLogCreateOrConnectWithoutAccountInput)
], CaseLogUncheckedCreateNestedManyWithoutAccountInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_many_account_input_envelope_input_1.CaseLogCreateManyAccountInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_many_account_input_envelope_input_1.CaseLogCreateManyAccountInputEnvelope)
], CaseLogUncheckedCreateNestedManyWithoutAccountInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUncheckedCreateNestedManyWithoutAccountInput.prototype, "connect", void 0);
CaseLogUncheckedCreateNestedManyWithoutAccountInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUncheckedCreateNestedManyWithoutAccountInput);
exports.CaseLogUncheckedCreateNestedManyWithoutAccountInput = CaseLogUncheckedCreateNestedManyWithoutAccountInput;
//# sourceMappingURL=case-log-unchecked-create-nested-many-without-account.input.js.map