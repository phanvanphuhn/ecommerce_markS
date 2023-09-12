"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AddressWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const profile_list_relation_filter_input_1 = require("../profile/profile-list-relation-filter.input");
let AddressWhereInput = AddressWhereInput_1 = class AddressWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [AddressWhereInput_1], { nullable: true })
], AddressWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AddressWhereInput_1], { nullable: true })
], AddressWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AddressWhereInput_1], { nullable: true })
], AddressWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], AddressWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], AddressWhereInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], AddressWhereInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], AddressWhereInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], AddressWhereInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], AddressWhereInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], AddressWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], AddressWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_list_relation_filter_input_1.ProfileListRelationFilter, { nullable: true })
], AddressWhereInput.prototype, "profiles", void 0);
AddressWhereInput = AddressWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], AddressWhereInput);
exports.AddressWhereInput = AddressWhereInput;
//# sourceMappingURL=address-where.input.js.map