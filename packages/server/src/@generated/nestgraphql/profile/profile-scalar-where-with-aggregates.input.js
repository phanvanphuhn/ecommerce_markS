"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProfileScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
let ProfileScalarWhereWithAggregatesInput = ProfileScalarWhereWithAggregatesInput_1 = class ProfileScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereWithAggregatesInput_1], { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereWithAggregatesInput_1], { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereWithAggregatesInput_1], { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], ProfileScalarWhereWithAggregatesInput.prototype, "userId", void 0);
ProfileScalarWhereWithAggregatesInput = ProfileScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProfileScalarWhereWithAggregatesInput);
exports.ProfileScalarWhereWithAggregatesInput = ProfileScalarWhereWithAggregatesInput;
//# sourceMappingURL=profile-scalar-where-with-aggregates.input.js.map