"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallUpsertWithoutScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_update_without_schedule_input_1 = require("./plan-call-update-without-schedule.input");
const class_transformer_1 = require("class-transformer");
const plan_call_create_without_schedule_input_1 = require("./plan-call-create-without-schedule.input");
const plan_call_where_input_1 = require("./plan-call-where.input");
let PlanCallUpsertWithoutScheduleInput = class PlanCallUpsertWithoutScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => plan_call_update_without_schedule_input_1.PlanCallUpdateWithoutScheduleInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => plan_call_update_without_schedule_input_1.PlanCallUpdateWithoutScheduleInput)
], PlanCallUpsertWithoutScheduleInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_create_without_schedule_input_1.PlanCallCreateWithoutScheduleInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => plan_call_create_without_schedule_input_1.PlanCallCreateWithoutScheduleInput)
], PlanCallUpsertWithoutScheduleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_where_input_1.PlanCallWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_where_input_1.PlanCallWhereInput)
], PlanCallUpsertWithoutScheduleInput.prototype, "where", void 0);
PlanCallUpsertWithoutScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallUpsertWithoutScheduleInput);
exports.PlanCallUpsertWithoutScheduleInput = PlanCallUpsertWithoutScheduleInput;
//# sourceMappingURL=plan-call-upsert-without-schedule.input.js.map