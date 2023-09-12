"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateNestedOneWithoutPlanCallInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_without_plan_call_input_1 = require("./schedule-create-without-plan-call.input");
const class_transformer_1 = require("class-transformer");
const schedule_create_or_connect_without_plan_call_input_1 = require("./schedule-create-or-connect-without-plan-call.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
let ScheduleCreateNestedOneWithoutPlanCallInput = class ScheduleCreateNestedOneWithoutPlanCallInput {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_create_without_plan_call_input_1.ScheduleCreateWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_without_plan_call_input_1.ScheduleCreateWithoutPlanCallInput)
], ScheduleCreateNestedOneWithoutPlanCallInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_or_connect_without_plan_call_input_1.ScheduleCreateOrConnectWithoutPlanCallInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_or_connect_without_plan_call_input_1.ScheduleCreateOrConnectWithoutPlanCallInput)
], ScheduleCreateNestedOneWithoutPlanCallInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleCreateNestedOneWithoutPlanCallInput.prototype, "connect", void 0);
ScheduleCreateNestedOneWithoutPlanCallInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleCreateNestedOneWithoutPlanCallInput);
exports.ScheduleCreateNestedOneWithoutPlanCallInput = ScheduleCreateNestedOneWithoutPlanCallInput;
//# sourceMappingURL=schedule-create-nested-one-without-plan-call.input.js.map