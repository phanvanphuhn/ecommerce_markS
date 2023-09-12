"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const case_log_order_by_relation_aggregate_input_1 = require("../case-log/case-log-order-by-relation-aggregate.input");
const hospital_to_doctor_order_by_relation_aggregate_input_1 = require("../hospital-to-doctor/hospital-to-doctor-order-by-relation-aggregate.input");
let DoctorOrderByWithRelationInput = class DoctorOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_order_by_relation_aggregate_input_1.CaseLogOrderByRelationAggregateInput, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "caseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_order_by_relation_aggregate_input_1.HospitalToDoctorOrderByRelationAggregateInput, { nullable: true })
], DoctorOrderByWithRelationInput.prototype, "hospitals", void 0);
DoctorOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorOrderByWithRelationInput);
exports.DoctorOrderByWithRelationInput = DoctorOrderByWithRelationInput;
//# sourceMappingURL=doctor-order-by-with-relation.input.js.map