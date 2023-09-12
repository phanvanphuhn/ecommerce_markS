"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const user_update_one_required_without_schedule_nested_input_1 = require("../user/user-update-one-required-without-schedule-nested.input");
const plan_call_update_one_without_schedule_nested_input_1 = require("../plan-call/plan-call-update-one-without-schedule-nested.input");
let ScheduleUpdateWithoutCaseLogInput = class ScheduleUpdateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_schedule_nested_input_1.UserUpdateOneRequiredWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_update_one_without_schedule_nested_input_1.PlanCallUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutCaseLogInput.prototype, "planCall", void 0);
ScheduleUpdateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateWithoutCaseLogInput);
exports.ScheduleUpdateWithoutCaseLogInput = ScheduleUpdateWithoutCaseLogInput;
//# sourceMappingURL=schedule-update-without-case-log.input.js.map