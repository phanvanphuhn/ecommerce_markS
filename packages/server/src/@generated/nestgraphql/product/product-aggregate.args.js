"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_input_1 = require("./product-where.input");
const class_transformer_1 = require("class-transformer");
const product_order_by_with_relation_input_1 = require("./product-order-by-with-relation.input");
const product_where_unique_input_1 = require("./product-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const product_count_aggregate_input_1 = require("./product-count-aggregate.input");
const product_avg_aggregate_input_1 = require("./product-avg-aggregate.input");
const product_sum_aggregate_input_1 = require("./product-sum-aggregate.input");
const product_min_aggregate_input_1 = require("./product-min-aggregate.input");
const product_max_aggregate_input_1 = require("./product-max-aggregate.input");
let ProductAggregateArgs = class ProductAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_input_1.ProductWhereInput)
], ProductAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_order_by_with_relation_input_1.ProductOrderByWithRelationInput], { nullable: true })
], ProductAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_unique_input_1.ProductWhereUniqueInput, { nullable: true })
], ProductAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_count_aggregate_input_1.ProductCountAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_avg_aggregate_input_1.ProductAvgAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_sum_aggregate_input_1.ProductSumAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_min_aggregate_input_1.ProductMinAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_max_aggregate_input_1.ProductMaxAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_max", void 0);
ProductAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ProductAggregateArgs);
exports.ProductAggregateArgs = ProductAggregateArgs;
//# sourceMappingURL=product-aggregate.args.js.map