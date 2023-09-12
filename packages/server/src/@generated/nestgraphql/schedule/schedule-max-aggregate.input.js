"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ScheduleMaxAggregateInput = class ScheduleMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMaxAggregateInput.prototype, "deleted", void 0);
ScheduleMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleMaxAggregateInput);
exports.ScheduleMaxAggregateInput = ScheduleMaxAggregateInput;
//# sourceMappingURL=schedule-max-aggregate.input.js.map