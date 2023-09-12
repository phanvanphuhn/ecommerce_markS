"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateWithoutPlanCallInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const user_create_nested_one_without_schedule_input_1 = require("../user/user-create-nested-one-without-schedule.input");
const case_log_create_nested_one_without_schedule_input_1 = require("../case-log/case-log-create-nested-one-without-schedule.input");
let ScheduleCreateWithoutPlanCallInput = class ScheduleCreateWithoutPlanCallInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleCreateWithoutPlanCallInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateWithoutPlanCallInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateWithoutPlanCallInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], ScheduleCreateWithoutPlanCallInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_schedule_input_1.UserCreateNestedOneWithoutScheduleInput, { nullable: false })
], ScheduleCreateWithoutPlanCallInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_one_without_schedule_input_1.CaseLogCreateNestedOneWithoutScheduleInput, { nullable: true })
], ScheduleCreateWithoutPlanCallInput.prototype, "caseLog", void 0);
ScheduleCreateWithoutPlanCallInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleCreateWithoutPlanCallInput);
exports.ScheduleCreateWithoutPlanCallInput = ScheduleCreateWithoutPlanCallInput;
//# sourceMappingURL=schedule-create-without-plan-call.input.js.map