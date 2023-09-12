"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PlanCallMaxAggregateInput = class PlanCallMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallMaxAggregateInput.prototype, "deleted", void 0);
PlanCallMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallMaxAggregateInput);
exports.PlanCallMaxAggregateInput = PlanCallMaxAggregateInput;
//# sourceMappingURL=plan-call-max-aggregate.input.js.map