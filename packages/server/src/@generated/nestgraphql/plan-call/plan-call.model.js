"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCall = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const schedule_model_1 = require("../schedule/schedule.model");
let PlanCall = class PlanCall {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], PlanCall.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PlanCall.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PlanCall.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCall.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCall.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCall.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCall.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PlanCall.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCall.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_model_1.Schedule, { nullable: false })
], PlanCall.prototype, "schedule", void 0);
PlanCall = __decorate([
    (0, graphql_2.ObjectType)()
], PlanCall);
exports.PlanCall = PlanCall;
//# sourceMappingURL=plan-call.model.js.map