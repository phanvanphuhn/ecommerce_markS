"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallUncheckedUpdateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PlanCallUncheckedUpdateManyInput = class PlanCallUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PlanCallUncheckedUpdateManyInput.prototype, "deleted", void 0);
PlanCallUncheckedUpdateManyInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallUncheckedUpdateManyInput);
exports.PlanCallUncheckedUpdateManyInput = PlanCallUncheckedUpdateManyInput;
//# sourceMappingURL=plan-call-unchecked-update-many.input.js.map