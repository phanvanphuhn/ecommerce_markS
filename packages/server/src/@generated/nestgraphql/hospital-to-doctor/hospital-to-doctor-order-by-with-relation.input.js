"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const hospital_order_by_with_relation_input_1 = require("../hospital/hospital-order-by-with-relation.input");
const doctor_order_by_with_relation_input_1 = require("../doctor/doctor-order-by-with-relation.input");
let HospitalToDoctorOrderByWithRelationInput = class HospitalToDoctorOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], HospitalToDoctorOrderByWithRelationInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], HospitalToDoctorOrderByWithRelationInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_order_by_with_relation_input_1.HospitalOrderByWithRelationInput, { nullable: true })
], HospitalToDoctorOrderByWithRelationInput.prototype, "hospital", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_order_by_with_relation_input_1.DoctorOrderByWithRelationInput, { nullable: true })
], HospitalToDoctorOrderByWithRelationInput.prototype, "doctor", void 0);
HospitalToDoctorOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorOrderByWithRelationInput);
exports.HospitalToDoctorOrderByWithRelationInput = HospitalToDoctorOrderByWithRelationInput;
//# sourceMappingURL=hospital-to-doctor-order-by-with-relation.input.js.map