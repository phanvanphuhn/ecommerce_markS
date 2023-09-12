"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogUpdateOneWithoutScheduleNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_create_without_schedule_input_1 = require("./case-log-create-without-schedule.input");
const class_transformer_1 = require("class-transformer");
const case_log_create_or_connect_without_schedule_input_1 = require("./case-log-create-or-connect-without-schedule.input");
const case_log_upsert_without_schedule_input_1 = require("./case-log-upsert-without-schedule.input");
const case_log_where_input_1 = require("./case-log-where.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const case_log_update_to_one_with_where_without_schedule_input_1 = require("./case-log-update-to-one-with-where-without-schedule.input");
let CaseLogUpdateOneWithoutScheduleNestedInput = class CaseLogUpdateOneWithoutScheduleNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_create_without_schedule_input_1.CaseLogCreateWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_without_schedule_input_1.CaseLogCreateWithoutScheduleInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_or_connect_without_schedule_input_1.CaseLogCreateOrConnectWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_create_or_connect_without_schedule_input_1.CaseLogCreateOrConnectWithoutScheduleInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_upsert_without_schedule_input_1.CaseLogUpsertWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_upsert_without_schedule_input_1.CaseLogUpsertWithoutScheduleInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_to_one_with_where_without_schedule_input_1.CaseLogUpdateToOneWithWhereWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_update_to_one_with_where_without_schedule_input_1.CaseLogUpdateToOneWithWhereWithoutScheduleInput)
], CaseLogUpdateOneWithoutScheduleNestedInput.prototype, "update", void 0);
CaseLogUpdateOneWithoutScheduleNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogUpdateOneWithoutScheduleNestedInput);
exports.CaseLogUpdateOneWithoutScheduleNestedInput = CaseLogUpdateOneWithoutScheduleNestedInput;
//# sourceMappingURL=case-log-update-one-without-schedule-nested.input.js.map