"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_where_input_1 = require("./hospital-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const hospital_to_doctor_list_relation_filter_input_1 = require("../hospital-to-doctor/hospital-to-doctor-list-relation-filter.input");
let HospitalWhereUniqueInput = class HospitalWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_where_input_1.HospitalWhereInput], { nullable: true })
], HospitalWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_where_input_1.HospitalWhereInput], { nullable: true })
], HospitalWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_where_input_1.HospitalWhereInput], { nullable: true })
], HospitalWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], HospitalWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], HospitalWhereUniqueInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_to_doctor_list_relation_filter_input_1.HospitalToDoctorListRelationFilter, { nullable: true })
], HospitalWhereUniqueInput.prototype, "doctors", void 0);
HospitalWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalWhereUniqueInput);
exports.HospitalWhereUniqueInput = HospitalWhereUniqueInput;
//# sourceMappingURL=hospital-where-unique.input.js.map