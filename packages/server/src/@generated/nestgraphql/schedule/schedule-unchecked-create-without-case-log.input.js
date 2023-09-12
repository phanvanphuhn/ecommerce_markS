"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUncheckedCreateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const graphql_3 = require("@nestjs/graphql");
const plan_call_unchecked_create_nested_one_without_schedule_input_1 = require("../plan-call/plan-call-unchecked-create-nested-one-without-schedule.input");
let ScheduleUncheckedCreateWithoutCaseLogInput = class ScheduleUncheckedCreateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_unchecked_create_nested_one_without_schedule_input_1.PlanCallUncheckedCreateNestedOneWithoutScheduleInput, { nullable: true })
], ScheduleUncheckedCreateWithoutCaseLogInput.prototype, "planCall", void 0);
ScheduleUncheckedCreateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUncheckedCreateWithoutCaseLogInput);
exports.ScheduleUncheckedCreateWithoutCaseLogInput = ScheduleUncheckedCreateWithoutCaseLogInput;
//# sourceMappingURL=schedule-unchecked-create-without-case-log.input.js.map