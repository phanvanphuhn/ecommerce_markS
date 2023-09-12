"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_input_1 = require("./product-where.input");
const class_transformer_1 = require("class-transformer");
const product_order_by_with_aggregation_input_1 = require("./product-order-by-with-aggregation.input");
const product_scalar_field_enum_1 = require("./product-scalar-field.enum");
const product_scalar_where_with_aggregates_input_1 = require("./product-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const product_count_aggregate_input_1 = require("./product-count-aggregate.input");
const product_avg_aggregate_input_1 = require("./product-avg-aggregate.input");
const product_sum_aggregate_input_1 = require("./product-sum-aggregate.input");
const product_min_aggregate_input_1 = require("./product-min-aggregate.input");
const product_max_aggregate_input_1 = require("./product-max-aggregate.input");
let ProductGroupByArgs = class ProductGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_input_1.ProductWhereInput)
], ProductGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_order_by_with_aggregation_input_1.ProductOrderByWithAggregationInput], { nullable: true })
], ProductGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_scalar_field_enum_1.ProductScalarFieldEnum], { nullable: false })
], ProductGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_scalar_where_with_aggregates_input_1.ProductScalarWhereWithAggregatesInput, { nullable: true })
], ProductGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_count_aggregate_input_1.ProductCountAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_avg_aggregate_input_1.ProductAvgAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_sum_aggregate_input_1.ProductSumAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_min_aggregate_input_1.ProductMinAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_max_aggregate_input_1.ProductMaxAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_max", void 0);
ProductGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ProductGroupByArgs);
exports.ProductGroupByArgs = ProductGroupByArgs;
//# sourceMappingURL=product-group-by.args.js.map