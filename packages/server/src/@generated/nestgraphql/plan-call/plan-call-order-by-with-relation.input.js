"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const schedule_order_by_with_relation_input_1 = require("../schedule/schedule-order-by-with-relation.input");
let PlanCallOrderByWithRelationInput = class PlanCallOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "outcome", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "topics", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_order_by_with_relation_input_1.ScheduleOrderByWithRelationInput, { nullable: true })
], PlanCallOrderByWithRelationInput.prototype, "schedule", void 0);
PlanCallOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], PlanCallOrderByWithRelationInput);
exports.PlanCallOrderByWithRelationInput = PlanCallOrderByWithRelationInput;
//# sourceMappingURL=plan-call-order-by-with-relation.input.js.map