"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_unique_input_1 = require("./product-where-unique.input");
const class_transformer_1 = require("class-transformer");
const product_create_input_1 = require("./product-create.input");
const product_update_input_1 = require("./product-update.input");
let UpsertOneProductArgs = class UpsertOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], UpsertOneProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_input_1.ProductCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_create_input_1.ProductCreateInput)
], UpsertOneProductArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_update_input_1.ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_update_input_1.ProductUpdateInput)
], UpsertOneProductArgs.prototype, "update", void 0);
UpsertOneProductArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneProductArgs);
exports.UpsertOneProductArgs = UpsertOneProductArgs;
//# sourceMappingURL=upsert-one-product.args.js.map