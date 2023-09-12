"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const profile_order_by_with_relation_input_1 = require("../profile/profile-order-by-with-relation.input");
const schedule_order_by_relation_aggregate_input_1 = require("../schedule/schedule-order-by-relation-aggregate.input");
const case_log_order_by_relation_aggregate_input_1 = require("../case-log/case-log-order-by-relation-aggregate.input");
const doctor_order_by_with_relation_input_1 = require("../doctor/doctor-order-by-with-relation.input");
let UserOrderByWithRelationInput = UserOrderByWithRelationInput_1 = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput_1, { nullable: true })
], UserOrderByWithRelationInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput_1, { nullable: true })
], UserOrderByWithRelationInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_order_by_with_relation_input_1.ProfileOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_order_by_relation_aggregate_input_1.ScheduleOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_order_by_relation_aggregate_input_1.CaseLogOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_order_by_with_relation_input_1.DoctorOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "Doctor", void 0);
UserOrderByWithRelationInput = UserOrderByWithRelationInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=user-order-by-with-relation.input.js.map