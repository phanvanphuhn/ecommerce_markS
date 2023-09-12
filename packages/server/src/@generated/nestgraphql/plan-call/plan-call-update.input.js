"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_update_one_required_without_plan_call_nested_input_1 = require("../schedule/schedule-update-one-required-without-plan-call-nested.input");
let PlanCallUpdateInput = class PlanCallUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUpdateInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUpdateInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_one_required_without_plan_call_nested_input_1.ScheduleUpdateOneRequiredWithoutPlanCallNestedInput, { nullable: true })
], PlanCallUpdateInput.prototype, "schedule", void 0);
PlanCallUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallUpdateInput);
exports.PlanCallUpdateInput = PlanCallUpdateInput;
//# sourceMappingURL=plan-call-update.input.js.map