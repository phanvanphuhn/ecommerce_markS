"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_input_1 = require("./product-where.input");
const class_transformer_1 = require("class-transformer");
const product_order_by_with_relation_input_1 = require("./product-order-by-with-relation.input");
const product_where_unique_input_1 = require("./product-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const product_scalar_field_enum_1 = require("./product-scalar-field.enum");
let FindManyProductArgs = class FindManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_input_1.ProductWhereInput)
], FindManyProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_order_by_with_relation_input_1.ProductOrderByWithRelationInput], { nullable: true })
], FindManyProductArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: true })
], FindManyProductArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_scalar_field_enum_1.ProductScalarFieldEnum], { nullable: true })
], FindManyProductArgs.prototype, "distinct", void 0);
FindManyProductArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyProductArgs);
exports.FindManyProductArgs = FindManyProductArgs;
//# sourceMappingURL=find-many-product.args.js.map