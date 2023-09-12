"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let AddressCountAggregateInput = class AddressCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], AddressCountAggregateInput.prototype, "_all", void 0);
AddressCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], AddressCountAggregateInput);
exports.AddressCountAggregateInput = AddressCountAggregateInput;
//# sourceMappingURL=address-count-aggregate.input.js.map