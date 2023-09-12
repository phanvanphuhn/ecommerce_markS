"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_count_aggregate_output_1 = require("./user-count-aggregate.output");
const user_avg_aggregate_output_1 = require("./user-avg-aggregate.output");
const user_sum_aggregate_output_1 = require("./user-sum-aggregate.output");
const user_min_aggregate_output_1 = require("./user-min-aggregate.output");
const user_max_aggregate_output_1 = require("./user-max-aggregate.output");
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_avg_aggregate_output_1.UserAvgAggregate, { nullable: true })
], AggregateUser.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_sum_aggregate_output_1.UserSumAggregate, { nullable: true })
], AggregateUser.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
//# sourceMappingURL=aggregate-user.output.js.map