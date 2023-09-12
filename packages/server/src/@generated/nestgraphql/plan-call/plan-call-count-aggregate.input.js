"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PlanCallCountAggregateInput = class PlanCallCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PlanCallCountAggregateInput.prototype, "_all", void 0);
PlanCallCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallCountAggregateInput);
exports.PlanCallCountAggregateInput = PlanCallCountAggregateInput;
//# sourceMappingURL=plan-call-count-aggregate.input.js.map