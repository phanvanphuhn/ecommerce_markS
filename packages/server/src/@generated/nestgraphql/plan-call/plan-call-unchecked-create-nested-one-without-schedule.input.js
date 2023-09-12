"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallUncheckedCreateNestedOneWithoutScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_create_without_schedule_input_1 = require("./plan-call-create-without-schedule.input");
const class_transformer_1 = require("class-transformer");
const plan_call_create_or_connect_without_schedule_input_1 = require("./plan-call-create-or-connect-without-schedule.input");
const plan_call_where_unique_input_1 = require("./plan-call-where-unique.input");
let PlanCallUncheckedCreateNestedOneWithoutScheduleInput = class PlanCallUncheckedCreateNestedOneWithoutScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => plan_call_create_without_schedule_input_1.PlanCallCreateWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_create_without_schedule_input_1.PlanCallCreateWithoutScheduleInput)
], PlanCallUncheckedCreateNestedOneWithoutScheduleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_create_or_connect_without_schedule_input_1.PlanCallCreateOrConnectWithoutScheduleInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_create_or_connect_without_schedule_input_1.PlanCallCreateOrConnectWithoutScheduleInput)
], PlanCallUncheckedCreateNestedOneWithoutScheduleInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_where_unique_input_1.PlanCallWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_where_unique_input_1.PlanCallWhereUniqueInput)
], PlanCallUncheckedCreateNestedOneWithoutScheduleInput.prototype, "connect", void 0);
PlanCallUncheckedCreateNestedOneWithoutScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallUncheckedCreateNestedOneWithoutScheduleInput);
exports.PlanCallUncheckedCreateNestedOneWithoutScheduleInput = PlanCallUncheckedCreateNestedOneWithoutScheduleInput;
//# sourceMappingURL=plan-call-unchecked-create-nested-one-without-schedule.input.js.map