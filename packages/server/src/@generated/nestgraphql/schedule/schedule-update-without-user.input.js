"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const plan_call_update_one_without_schedule_nested_input_1 = require("../plan-call/plan-call-update-one-without-schedule-nested.input");
const case_log_update_one_without_schedule_nested_input_1 = require("../case-log/case-log-update-one-without-schedule-nested.input");
let ScheduleUpdateWithoutUserInput = class ScheduleUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_update_one_without_schedule_nested_input_1.PlanCallUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_one_without_schedule_nested_input_1.CaseLogUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutUserInput.prototype, "caseLog", void 0);
ScheduleUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateWithoutUserInput);
exports.ScheduleUpdateWithoutUserInput = ScheduleUpdateWithoutUserInput;
//# sourceMappingURL=schedule-update-without-user.input.js.map