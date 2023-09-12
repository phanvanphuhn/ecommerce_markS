"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const address_order_by_with_relation_input_1 = require("../address/address-order-by-with-relation.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
let ProfileOrderByWithRelationInput = class ProfileOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_order_by_with_relation_input_1.AddressOrderByWithRelationInput, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], ProfileOrderByWithRelationInput.prototype, "user", void 0);
ProfileOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileOrderByWithRelationInput);
exports.ProfileOrderByWithRelationInput = ProfileOrderByWithRelationInput;
//# sourceMappingURL=profile-order-by-with-relation.input.js.map