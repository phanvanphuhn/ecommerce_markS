"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PlanCallCreateManyInput = class PlanCallCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateManyInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateManyInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallCreateManyInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PlanCallCreateManyInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallCreateManyInput.prototype, "deleted", void 0);
PlanCallCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallCreateManyInput);
exports.PlanCallCreateManyInput = PlanCallCreateManyInput;
//# sourceMappingURL=plan-call-create-many.input.js.map