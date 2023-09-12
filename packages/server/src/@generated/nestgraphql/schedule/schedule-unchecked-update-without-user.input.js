"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUncheckedUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const plan_call_unchecked_update_one_without_schedule_nested_input_1 = require("../plan-call/plan-call-unchecked-update-one-without-schedule-nested.input");
const case_log_unchecked_update_one_without_schedule_nested_input_1 = require("../case-log/case-log-unchecked-update-one-without-schedule-nested.input");
let ScheduleUncheckedUpdateWithoutUserInput = class ScheduleUncheckedUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_unchecked_update_one_without_schedule_nested_input_1.PlanCallUncheckedUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_one_without_schedule_nested_input_1.CaseLogUncheckedUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUncheckedUpdateWithoutUserInput.prototype, "caseLog", void 0);
ScheduleUncheckedUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUncheckedUpdateWithoutUserInput);
exports.ScheduleUncheckedUpdateWithoutUserInput = ScheduleUncheckedUpdateWithoutUserInput;
//# sourceMappingURL=schedule-unchecked-update-without-user.input.js.map