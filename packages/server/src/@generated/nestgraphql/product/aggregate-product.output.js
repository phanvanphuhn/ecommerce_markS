"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_count_aggregate_output_1 = require("./product-count-aggregate.output");
const product_avg_aggregate_output_1 = require("./product-avg-aggregate.output");
const product_sum_aggregate_output_1 = require("./product-sum-aggregate.output");
const product_min_aggregate_output_1 = require("./product-min-aggregate.output");
const product_max_aggregate_output_1 = require("./product-max-aggregate.output");
let AggregateProduct = class AggregateProduct {
};
__decorate([
    (0, graphql_1.Field)(() => product_count_aggregate_output_1.ProductCountAggregate, { nullable: true })
], AggregateProduct.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_avg_aggregate_output_1.ProductAvgAggregate, { nullable: true })
], AggregateProduct.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_sum_aggregate_output_1.ProductSumAggregate, { nullable: true })
], AggregateProduct.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_min_aggregate_output_1.ProductMinAggregate, { nullable: true })
], AggregateProduct.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_max_aggregate_output_1.ProductMaxAggregate, { nullable: true })
], AggregateProduct.prototype, "_max", void 0);
AggregateProduct = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProduct);
exports.AggregateProduct = AggregateProduct;
//# sourceMappingURL=aggregate-product.output.js.map