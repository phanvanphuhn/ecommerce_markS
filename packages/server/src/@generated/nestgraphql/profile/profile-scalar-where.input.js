"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProfileScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
let ProfileScalarWhereInput = ProfileScalarWhereInput_1 = class ProfileScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereInput_1], { nullable: true })
], ProfileScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereInput_1], { nullable: true })
], ProfileScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfileScalarWhereInput_1], { nullable: true })
], ProfileScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileScalarWhereInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileScalarWhereInput.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ProfileScalarWhereInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ProfileScalarWhereInput.prototype, "userId", void 0);
ProfileScalarWhereInput = ProfileScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProfileScalarWhereInput);
exports.ProfileScalarWhereInput = ProfileScalarWhereInput;
//# sourceMappingURL=profile-scalar-where.input.js.map