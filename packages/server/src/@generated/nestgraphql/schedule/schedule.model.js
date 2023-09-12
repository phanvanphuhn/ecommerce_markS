"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const plan_call_model_1 = require("../plan-call/plan-call.model");
const case_log_model_1 = require("../case-log/case-log.model");
let Schedule = class Schedule {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Schedule.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Schedule.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Schedule.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Schedule.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Schedule.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Schedule.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Schedule.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Schedule.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], Schedule.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Schedule.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Schedule.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], Schedule.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_model_1.PlanCall, { nullable: true })
], Schedule.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_model_1.CaseLog, { nullable: true })
], Schedule.prototype, "caseLog", void 0);
Schedule = __decorate([
    (0, graphql_2.ObjectType)()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.model.js.map