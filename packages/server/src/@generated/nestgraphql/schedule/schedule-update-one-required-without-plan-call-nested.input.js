"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateOneRequiredWithoutPlanCallNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_without_plan_call_input_1 = require("./schedule-create-without-plan-call.input");
const class_transformer_1 = require("class-transformer");
const schedule_create_or_connect_without_plan_call_input_1 = require("./schedule-create-or-connect-without-plan-call.input");
const schedule_upsert_without_plan_call_input_1 = require("./schedule-upsert-without-plan-call.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
const schedule_update_to_one_with_where_without_plan_call_input_1 = require("./schedule-update-to-one-with-where-without-plan-call.input");
let ScheduleUpdateOneRequiredWithoutPlanCallNestedInput = class ScheduleUpdateOneRequiredWithoutPlanCallNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_create_without_plan_call_input_1.ScheduleCreateWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_without_plan_call_input_1.ScheduleCreateWithoutPlanCallInput)
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_or_connect_without_plan_call_input_1.ScheduleCreateOrConnectWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_or_connect_without_plan_call_input_1.ScheduleCreateOrConnectWithoutPlanCallInput)
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_upsert_without_plan_call_input_1.ScheduleUpsertWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_upsert_without_plan_call_input_1.ScheduleUpsertWithoutPlanCallInput)
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_to_one_with_where_without_plan_call_input_1.ScheduleUpdateToOneWithWhereWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_update_to_one_with_where_without_plan_call_input_1.ScheduleUpdateToOneWithWhereWithoutPlanCallInput)
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput.prototype, "update", void 0);
ScheduleUpdateOneRequiredWithoutPlanCallNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateOneRequiredWithoutPlanCallNestedInput);
exports.ScheduleUpdateOneRequiredWithoutPlanCallNestedInput = ScheduleUpdateOneRequiredWithoutPlanCallNestedInput;
//# sourceMappingURL=schedule-update-one-required-without-plan-call-nested.input.js.map