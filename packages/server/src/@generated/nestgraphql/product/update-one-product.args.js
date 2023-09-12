"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_update_input_1 = require("./product-update.input");
const class_transformer_1 = require("class-transformer");
const product_where_unique_input_1 = require("./product-where-unique.input");
let UpdateOneProductArgs = class UpdateOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_update_input_1.ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_update_input_1.ProductUpdateInput)
], UpdateOneProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], UpdateOneProductArgs.prototype, "where", void 0);
UpdateOneProductArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneProductArgs);
exports.UpdateOneProductArgs = UpdateOneProductArgs;
//# sourceMappingURL=update-one-product.args.js.map