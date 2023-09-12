"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateWithoutPlanCallInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const user_update_one_required_without_schedule_nested_input_1 = require("../user/user-update-one-required-without-schedule-nested.input");
const case_log_update_one_without_schedule_nested_input_1 = require("../case-log/case-log-update-one-without-schedule-nested.input");
let ScheduleUpdateWithoutPlanCallInput = class ScheduleUpdateWithoutPlanCallInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_schedule_nested_input_1.UserUpdateOneRequiredWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_one_without_schedule_nested_input_1.CaseLogUpdateOneWithoutScheduleNestedInput, { nullable: true })
], ScheduleUpdateWithoutPlanCallInput.prototype, "caseLog", void 0);
ScheduleUpdateWithoutPlanCallInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateWithoutPlanCallInput);
exports.ScheduleUpdateWithoutPlanCallInput = ScheduleUpdateWithoutPlanCallInput;
//# sourceMappingURL=schedule-update-without-plan-call.input.js.map