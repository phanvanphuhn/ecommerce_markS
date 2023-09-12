"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HospitalWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const hospital_to_doctor_list_relation_filter_input_1 = require("../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input");
let HospitalWhereInput = HospitalWhereInput_1 = class HospitalWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [HospitalWhereInput_1], { nullable: true })
], HospitalWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalWhereInput_1], { nullable: true })
], HospitalWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [HospitalWhereInput_1], { nullable: true })
], HospitalWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], HospitalWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], HospitalWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], HospitalWhereInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_list_relation_filter_input_1.HospitalToDoctorListRelationFilter, { nullable: true })
], HospitalWhereInput.prototype, "doctors", void 0);
HospitalWhereInput = HospitalWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], HospitalWhereInput);
exports.HospitalWhereInput = HospitalWhereInput;
//# sourceMappingURL=hospital-where.input.js.map