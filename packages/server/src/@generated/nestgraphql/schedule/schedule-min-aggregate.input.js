"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMinAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ScheduleMinAggregateInput = class ScheduleMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ScheduleMinAggregateInput.prototype, "deleted", void 0);
ScheduleMinAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleMinAggregateInput);
exports.ScheduleMinAggregateInput = ScheduleMinAggregateInput;
//# sourceMappingURL=schedule-min-aggregate.input.js.map