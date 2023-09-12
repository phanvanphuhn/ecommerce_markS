"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_update_many_mutation_input_1 = require("./product-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const product_where_input_1 = require("./product-where.input");
let UpdateManyProductArgs = class UpdateManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_update_many_mutation_input_1.ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_update_many_mutation_input_1.ProductUpdateManyMutationInput)
], UpdateManyProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_input_1.ProductWhereInput)
], UpdateManyProductArgs.prototype, "where", void 0);
UpdateManyProductArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyProductArgs);
exports.UpdateManyProductArgs = UpdateManyProductArgs;
//# sourceMappingURL=update-many-product.args.js.map