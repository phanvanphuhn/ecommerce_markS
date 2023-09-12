"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_where_input_1 = require("./address-where.input");
const class_transformer_1 = require("class-transformer");
const address_order_by_with_relation_input_1 = require("./address-order-by-with-relation.input");
const address_where_unique_input_1 = require("./address-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const address_count_aggregate_input_1 = require("./address-count-aggregate.input");
const address_avg_aggregate_input_1 = require("./address-avg-aggregate.input");
const address_sum_aggregate_input_1 = require("./address-sum-aggregate.input");
const address_min_aggregate_input_1 = require("./address-min-aggregate.input");
const address_max_aggregate_input_1 = require("./address-max-aggregate.input");
let AddressAggregateArgs = class AddressAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], AddressAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_order_by_with_relation_input_1.AddressOrderByWithRelationInput], { nullable: true })
], AddressAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_unique_input_1.AddressWhereUniqueInput, { nullable: true })
], AddressAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_count_aggregate_input_1.AddressCountAggregateInput, { nullable: true })
], AddressAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_avg_aggregate_input_1.AddressAvgAggregateInput, { nullable: true })
], AddressAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_sum_aggregate_input_1.AddressSumAggregateInput, { nullable: true })
], AddressAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_min_aggregate_input_1.AddressMinAggregateInput, { nullable: true })
], AddressAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_max_aggregate_input_1.AddressMaxAggregateInput, { nullable: true })
], AddressAggregateArgs.prototype, "_max", void 0);
AddressAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AddressAggregateArgs);
exports.AddressAggregateArgs = AddressAggregateArgs;
//# sourceMappingURL=address-aggregate.args.js.map