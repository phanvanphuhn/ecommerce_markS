"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDoctorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_where_input_1 = require("./doctor-where.input");
const class_transformer_1 = require("class-transformer");
const doctor_order_by_with_relation_input_1 = require("./doctor-order-by-with-relation.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const doctor_scalar_field_enum_1 = require("./doctor-scalar-field.enum");
let FindManyDoctorArgs = class FindManyDoctorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], FindManyDoctorArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_order_by_with_relation_input_1.DoctorOrderByWithRelationInput], { nullable: true })
], FindManyDoctorArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true })
], FindManyDoctorArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyDoctorArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyDoctorArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [doctor_scalar_field_enum_1.DoctorScalarFieldEnum], { nullable: true })
], FindManyDoctorArgs.prototype, "distinct", void 0);
FindManyDoctorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyDoctorArgs);
exports.FindManyDoctorArgs = FindManyDoctorArgs;
//# sourceMappingURL=find-many-doctor.args.js.map