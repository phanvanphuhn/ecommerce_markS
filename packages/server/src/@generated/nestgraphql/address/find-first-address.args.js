"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAddressArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_where_input_1 = require("./address-where.input");
const class_transformer_1 = require("class-transformer");
const address_order_by_with_relation_input_1 = require("./address-order-by-with-relation.input");
const address_where_unique_input_1 = require("./address-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const address_scalar_field_enum_1 = require("./address-scalar-field.enum");
let FindFirstAddressArgs = class FindFirstAddressArgs {
};
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], FindFirstAddressArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_order_by_with_relation_input_1.AddressOrderByWithRelationInput], { nullable: true })
], FindFirstAddressArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_unique_input_1.AddressWhereUniqueInput, { nullable: true })
], FindFirstAddressArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstAddressArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstAddressArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_scalar_field_enum_1.AddressScalarFieldEnum], { nullable: true })
], FindFirstAddressArgs.prototype, "distinct", void 0);
FindFirstAddressArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstAddressArgs);
exports.FindFirstAddressArgs = FindFirstAddressArgs;
//# sourceMappingURL=find-first-address.args.js.map