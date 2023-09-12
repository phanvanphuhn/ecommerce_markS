"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_where_input_1 = require("./address-where.input");
const class_transformer_1 = require("class-transformer");
const address_order_by_with_aggregation_input_1 = require("./address-order-by-with-aggregation.input");
const address_scalar_field_enum_1 = require("./address-scalar-field.enum");
const address_scalar_where_with_aggregates_input_1 = require("./address-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const address_count_aggregate_input_1 = require("./address-count-aggregate.input");
const address_avg_aggregate_input_1 = require("./address-avg-aggregate.input");
const address_sum_aggregate_input_1 = require("./address-sum-aggregate.input");
const address_min_aggregate_input_1 = require("./address-min-aggregate.input");
const address_max_aggregate_input_1 = require("./address-max-aggregate.input");
let AddressGroupByArgs = class AddressGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], AddressGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_order_by_with_aggregation_input_1.AddressOrderByWithAggregationInput], { nullable: true })
], AddressGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [address_scalar_field_enum_1.AddressScalarFieldEnum], { nullable: false })
], AddressGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_scalar_where_with_aggregates_input_1.AddressScalarWhereWithAggregatesInput, { nullable: true })
], AddressGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_count_aggregate_input_1.AddressCountAggregateInput, { nullable: true })
], AddressGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_avg_aggregate_input_1.AddressAvgAggregateInput, { nullable: true })
], AddressGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_sum_aggregate_input_1.AddressSumAggregateInput, { nullable: true })
], AddressGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_min_aggregate_input_1.AddressMinAggregateInput, { nullable: true })
], AddressGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_max_aggregate_input_1.AddressMaxAggregateInput, { nullable: true })
], AddressGroupByArgs.prototype, "_max", void 0);
AddressGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AddressGroupByArgs);
exports.AddressGroupByArgs = AddressGroupByArgs;
//# sourceMappingURL=address-group-by.args.js.map