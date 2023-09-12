"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAddress = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_count_aggregate_output_1 = require("./address-count-aggregate.output");
const address_avg_aggregate_output_1 = require("./address-avg-aggregate.output");
const address_sum_aggregate_output_1 = require("./address-sum-aggregate.output");
const address_min_aggregate_output_1 = require("./address-min-aggregate.output");
const address_max_aggregate_output_1 = require("./address-max-aggregate.output");
let AggregateAddress = class AggregateAddress {
};
__decorate([
    (0, graphql_1.Field)(() => address_count_aggregate_output_1.AddressCountAggregate, { nullable: true })
], AggregateAddress.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_avg_aggregate_output_1.AddressAvgAggregate, { nullable: true })
], AggregateAddress.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_sum_aggregate_output_1.AddressSumAggregate, { nullable: true })
], AggregateAddress.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_min_aggregate_output_1.AddressMinAggregate, { nullable: true })
], AggregateAddress.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_max_aggregate_output_1.AddressMaxAggregate, { nullable: true })
], AggregateAddress.prototype, "_max", void 0);
AggregateAddress = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateAddress);
exports.AggregateAddress = AggregateAddress;
//# sourceMappingURL=aggregate-address.output.js.map