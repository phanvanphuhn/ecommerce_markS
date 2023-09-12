"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnumRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
const int_filter_input_1 = require("./int-filter.input");
const enum_role_filter_input_1 = require("./enum-role-filter.input");
let EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter_1 = class EnumRoleWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumRoleWithAggregatesFilter_1, { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], EnumRoleWithAggregatesFilter.prototype, "_max", void 0);
EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], EnumRoleWithAggregatesFilter);
exports.EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter;
//# sourceMappingURL=enum-role-with-aggregates-filter.input.js.map