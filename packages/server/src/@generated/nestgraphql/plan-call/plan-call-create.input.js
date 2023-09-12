"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_nested_one_without_plan_call_input_1 = require("../schedule/schedule-create-nested-one-without-plan-call.input");
let PlanCallCreateInput = class PlanCallCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_nested_one_without_plan_call_input_1.ScheduleCreateNestedOneWithoutPlanCallInput, { nullable: false })
], PlanCallCreateInput.prototype, "schedule", void 0);
PlanCallCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallCreateInput);
exports.PlanCallCreateInput = PlanCallCreateInput;
//# sourceMappingURL=plan-call-create.input.js.map