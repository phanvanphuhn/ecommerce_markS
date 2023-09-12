"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const plan_call_create_nested_one_without_schedule_input_1 = require("../plan-call/plan-call-create-nested-one-without-schedule.input");
const case_log_create_nested_one_without_schedule_input_1 = require("../case-log/case-log-create-nested-one-without-schedule.input");
let ScheduleCreateWithoutUserInput = class ScheduleCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleCreateWithoutUserInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateWithoutUserInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateWithoutUserInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], ScheduleCreateWithoutUserInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_create_nested_one_without_schedule_input_1.PlanCallCreateNestedOneWithoutScheduleInput, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_one_without_schedule_input_1.CaseLogCreateNestedOneWithoutScheduleInput, { nullable: true })
], ScheduleCreateWithoutUserInput.prototype, "caseLog", void 0);
ScheduleCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleCreateWithoutUserInput);
exports.ScheduleCreateWithoutUserInput = ScheduleCreateWithoutUserInput;
//# sourceMappingURL=schedule-create-without-user.input.js.map