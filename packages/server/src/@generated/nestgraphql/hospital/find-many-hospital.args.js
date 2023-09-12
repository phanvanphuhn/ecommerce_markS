"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyHospitalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_input_1 = require("./hospital-where.input");
const class_transformer_1 = require("class-transformer");
const hospital_order_by_with_relation_input_1 = require("./hospital-order-by-with-relation.input");
const hospital_where_unique_input_1 = require("./hospital-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const hospital_scalar_field_enum_1 = require("./hospital-scalar-field.enum");
let FindManyHospitalArgs = class FindManyHospitalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_input_1.HospitalWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_input_1.HospitalWhereInput)
], FindManyHospitalArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_order_by_with_relation_input_1.HospitalOrderByWithRelationInput], { nullable: true })
], FindManyHospitalArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput, { nullable: true })
], FindManyHospitalArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyHospitalArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyHospitalArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_scalar_field_enum_1.HospitalScalarFieldEnum], { nullable: true })
], FindManyHospitalArgs.prototype, "distinct", void 0);
FindManyHospitalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyHospitalArgs);
exports.FindManyHospitalArgs = FindManyHospitalArgs;
//# sourceMappingURL=find-many-hospital.args.js.map