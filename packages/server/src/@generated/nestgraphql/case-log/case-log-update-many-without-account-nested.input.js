"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateManyWithoutAccountNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_without_account_input_1 = require("./case-log-create-without-account.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_or_connect_without_account_input_1 = require("./case-log-create-or-connect-without-account.input");
const case_log_upsert_with_where_unique_without_account_input_1 = require("./case-log-upsert-with-where-unique-without-account.input");
const case_log_create_many_account_input_envelope_input_1 = require("./case-log-create-many-account-input-envelope.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const case_log_update_with_where_unique_without_account_input_1 = require("./case-log-update-with-where-unique-without-account.input");
const case_log_update_many_with_where_without_account_input_1 = require("./case-log-update-many-with-where-without-account.input");
const case_log_scalar_where_input_1 = require("./case-log-scalar-where.input");
let CaseLogUpdateManyWithoutAccountNestedInput = class CaseLogUpdateManyWithoutAccountNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_without_account_input_1.CaseLogCreateWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_without_account_input_1.CaseLogCreateWithoutAccountInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_create_or_connect_without_account_input_1.CaseLogCreateOrConnectWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_or_connect_without_account_input_1.CaseLogCreateOrConnectWithoutAccountInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_upsert_with_where_unique_without_account_input_1.CaseLogUpsertWithWhereUniqueWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_upsert_with_where_unique_without_account_input_1.CaseLogUpsertWithWhereUniqueWithoutAccountInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_many_account_input_envelope_input_1.CaseLogCreateManyAccountInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_many_account_input_envelope_input_1.CaseLogCreateManyAccountInputEnvelope)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_where_unique_input_1.CaseLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_update_with_where_unique_without_account_input_1.CaseLogUpdateWithWhereUniqueWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_with_where_unique_without_account_input_1.CaseLogUpdateWithWhereUniqueWithoutAccountInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_update_many_with_where_without_account_input_1.CaseLogUpdateManyWithWhereWithoutAccountInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_many_with_where_without_account_input_1.CaseLogUpdateManyWithWhereWithoutAccountInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_scalar_where_input_1.CaseLogScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_scalar_where_input_1.CaseLogScalarWhereInput)
], CaseLogUpdateManyWithoutAccountNestedInput.prototype, "deleteMany", void 0);
CaseLogUpdateManyWithoutAccountNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateManyWithoutAccountNestedInput);
exports.CaseLogUpdateManyWithoutAccountNestedInput = CaseLogUpdateManyWithoutAccountNestedInput;
//# sourceMappingURL=case-log-update-many-without-account-nested.input.js.map