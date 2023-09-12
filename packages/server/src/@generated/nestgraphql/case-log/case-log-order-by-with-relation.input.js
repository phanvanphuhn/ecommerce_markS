"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const doctor_order_by_with_relation_input_1 = require("../doctor/doctor-order-by-with-relation.input");
const products_invoice_order_by_with_relation_input_1 = require("../products-invoice/products-invoice-order-by-with-relation.input");
const schedule_order_by_with_relation_input_1 = require("../schedule/schedule-order-by-with-relation.input");
let CaseLogOrderByWithRelationInput = class CaseLogOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_order_by_with_relation_input_1.DoctorOrderByWithRelationInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_order_by_with_relation_input_1.ProductsInvoiceOrderByWithRelationInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_order_by_with_relation_input_1.ScheduleOrderByWithRelationInput, { nullable: true })
], CaseLogOrderByWithRelationInput.prototype, "schedule", void 0);
CaseLogOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogOrderByWithRelationInput);
exports.CaseLogOrderByWithRelationInput = CaseLogOrderByWithRelationInput;
//# sourceMappingURL=case-log-order-by-with-relation.input.js.map