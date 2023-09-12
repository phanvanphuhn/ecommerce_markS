"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateOneRequiredWithoutCaseLogNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_without_case_log_input_1 = require("./schedule-create-without-case-log.input");
const class_transformer_1 = require("class-transformer");
const schedule_create_or_connect_without_case_log_input_1 = require("./schedule-create-or-connect-without-case-log.input");
const schedule_upsert_without_case_log_input_1 = require("./schedule-upsert-without-case-log.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
const schedule_update_to_one_with_where_without_case_log_input_1 = require("./schedule-update-to-one-with-where-without-case-log.input");
let ScheduleUpdateOneRequiredWithoutCaseLogNestedInput = class ScheduleUpdateOneRequiredWithoutCaseLogNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_create_without_case_log_input_1.ScheduleCreateWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_without_case_log_input_1.ScheduleCreateWithoutCaseLogInput)
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_or_connect_without_case_log_input_1.ScheduleCreateOrConnectWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_or_connect_without_case_log_input_1.ScheduleCreateOrConnectWithoutCaseLogInput)
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_upsert_without_case_log_input_1.ScheduleUpsertWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_upsert_without_case_log_input_1.ScheduleUpsertWithoutCaseLogInput)
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_to_one_with_where_without_case_log_input_1.ScheduleUpdateToOneWithWhereWithoutCaseLogInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_update_to_one_with_where_without_case_log_input_1.ScheduleUpdateToOneWithWhereWithoutCaseLogInput)
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput.prototype, "update", void 0);
ScheduleUpdateOneRequiredWithoutCaseLogNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateOneRequiredWithoutCaseLogNestedInput);
exports.ScheduleUpdateOneRequiredWithoutCaseLogNestedInput = ScheduleUpdateOneRequiredWithoutCaseLogNestedInput;
//# sourceMappingURL=schedule-update-one-required-without-case-log-nested.input.js.map