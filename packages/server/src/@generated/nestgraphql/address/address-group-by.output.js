"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const address_count_aggregate_output_1 = require("./address-count-aggregate.output");
const address_avg_aggregate_output_1 = require("./address-avg-aggregate.output");
const address_sum_aggregate_output_1 = require("./address-sum-aggregate.output");
const address_min_aggregate_output_1 = require("./address-min-aggregate.output");
const address_max_aggregate_output_1 = require("./address-max-aggregate.output");
let AddressGroupBy = class AddressGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], AddressGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressGroupBy.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressGroupBy.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressGroupBy.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressGroupBy.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], AddressGroupBy.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], AddressGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], AddressGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_count_aggregate_output_1.AddressCountAggregate, { nullable: true })
], AddressGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_avg_aggregate_output_1.AddressAvgAggregate, { nullable: true })
], AddressGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_sum_aggregate_output_1.AddressSumAggregate, { nullable: true })
], AddressGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_min_aggregate_output_1.AddressMinAggregate, { nullable: true })
], AddressGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_max_aggregate_output_1.AddressMaxAggregate, { nullable: true })
], AddressGroupBy.prototype, "_max", void 0);
AddressGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], AddressGroupBy);
exports.AddressGroupBy = AddressGroupBy;
//# sourceMappingURL=address-group-by.output.js.map