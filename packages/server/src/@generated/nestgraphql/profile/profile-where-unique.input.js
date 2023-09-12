"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const profile_where_input_1 = require("./profile-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const address_relation_filter_input_1 = require("../address/address-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let ProfileWhereUniqueInput = class ProfileWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProfileWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProfileWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_input_1.ProfileWhereInput], { nullable: true })
], ProfileWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_input_1.ProfileWhereInput], { nullable: true })
], ProfileWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_input_1.ProfileWhereInput], { nullable: true })
], ProfileWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileWhereUniqueInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileWhereUniqueInput.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileWhereUniqueInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_relation_filter_input_1.AddressRelationFilter, { nullable: true })
], ProfileWhereUniqueInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], ProfileWhereUniqueInput.prototype, "user", void 0);
ProfileWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileWhereUniqueInput);
exports.ProfileWhereUniqueInput = ProfileWhereUniqueInput;
//# sourceMappingURL=profile-where-unique.input.js.map