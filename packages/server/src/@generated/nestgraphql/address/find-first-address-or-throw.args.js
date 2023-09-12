"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAddressOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_where_input_1 = require("./address-where.input");
const class_transformer_1 = require("class-transformer");
const address_order_by_with_relation_input_1 = require("./address-order-by-with-relation.input");
const address_where_unique_input_1 = require("./address-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const address_scalar_field_enum_1 = require("./address-scalar-field.enum");
let FindFirstAddressOrThrowArgs = class FindFirstAddressOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], FindFirstAddressOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_order_by_with_relation_input_1.AddressOrderByWithRelationInput], { nullable: true })
], FindFirstAddressOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_unique_input_1.AddressWhereUniqueInput, { nullable: true })
], FindFirstAddressOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstAddressOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstAddressOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_scalar_field_enum_1.AddressScalarFieldEnum], { nullable: true })
], FindFirstAddressOrThrowArgs.prototype, "distinct", void 0);
FindFirstAddressOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstAddressOrThrowArgs);
exports.FindFirstAddressOrThrowArgs = FindFirstAddressOrThrowArgs;
//# sourceMappingURL=find-first-address-or-throw.args.js.map