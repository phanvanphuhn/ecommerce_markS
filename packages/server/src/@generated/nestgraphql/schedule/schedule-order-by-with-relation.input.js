"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const plan_call_order_by_with_relation_input_1 = require("../plan-call/plan-call-order-by-with-relation.input");
const case_log_order_by_with_relation_input_1 = require("../case-log/case-log-order-by-with-relation.input");
let ScheduleOrderByWithRelationInput = class ScheduleOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "scheduleType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_order_by_with_relation_input_1.PlanCallOrderByWithRelationInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "planCall", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_order_by_with_relation_input_1.CaseLogOrderByWithRelationInput, { nullable: true })
], ScheduleOrderByWithRelationInput.prototype, "caseLog", void 0);
ScheduleOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleOrderByWithRelationInput);
exports.ScheduleOrderByWithRelationInput = ScheduleOrderByWithRelationInput;
//# sourceMappingURL=schedule-order-by-with-relation.input.js.map