"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const address_relation_filter_input_1 = require("../address/address-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let ProfileWhereInput = ProfileWhereInput_1 = class ProfileWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProfileWhereInput_1], { nullable: true })
], ProfileWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileWhereInput_1], { nullable: true })
], ProfileWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileWhereInput_1], { nullable: true })
], ProfileWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileWhereInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileWhereInput.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileWhereInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_relation_filter_input_1.AddressRelationFilter, { nullable: true })
], ProfileWhereInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], ProfileWhereInput.prototype, "user", void 0);
ProfileWhereInput = ProfileWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProfileWhereInput);
exports.ProfileWhereInput = ProfileWhereInput;
//# sourceMappingURL=profile-where.input.js.map