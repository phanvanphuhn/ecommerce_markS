"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallUpdateWithoutScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PlanCallUpdateWithoutScheduleInput = class PlanCallUpdateWithoutScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateWithoutScheduleInput.prototype, "deleted", void 0);
PlanCallUpdateWithoutScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallUpdateWithoutScheduleInput);
exports.PlanCallUpdateWithoutScheduleInput = PlanCallUpdateWithoutScheduleInput;
//# sourceMappingURL=plan-call-update-without-schedule.input.js.map