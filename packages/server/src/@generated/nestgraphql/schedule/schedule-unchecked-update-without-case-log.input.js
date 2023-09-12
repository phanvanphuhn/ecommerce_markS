"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUncheckedUpdateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const graphql_3 = require("@nestjs/graphql");
const plan_call_unchecked_update_one_without_schedule_nested_input_1 = require("../plan-call/plan-call-unchecked-update-one-without-schedule-nested.input");
let ScheduleUncheckedUpdateWithoutCaseLogInput = class ScheduleUncheckedUpdateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_unchecked_update_one_without_schedule_nested_input_1.PlanCallUncheckedUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUncheckedUpdateWithoutCaseLogInput.prototype, "planCall", void 0);
ScheduleUncheckedUpdateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUncheckedUpdateWithoutCaseLogInput);
exports.ScheduleUncheckedUpdateWithoutCaseLogInput = ScheduleUncheckedUpdateWithoutCaseLogInput;
//# sourceMappingURL=schedule-unchecked-update-without-case-log.input.js.map