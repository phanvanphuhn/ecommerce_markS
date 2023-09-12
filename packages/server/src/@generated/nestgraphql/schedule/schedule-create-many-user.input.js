"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateManyUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("../prisma/schedule-type.enum");
let ScheduleCreateManyUserInput = class ScheduleCreateManyUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ScheduleCreateManyUserInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateManyUserInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ScheduleCreateManyUserInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: false })
], ScheduleCreateManyUserInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ScheduleCreateManyUserInput.prototype, "deleted", void 0);
ScheduleCreateManyUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleCreateManyUserInput);
exports.ScheduleCreateManyUserInput = ScheduleCreateManyUserInput;
//# sourceMappingURL=schedule-create-many-user.input.js.map