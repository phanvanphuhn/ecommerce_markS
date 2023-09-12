"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyWithWhereWithoutAddressInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_scalar_where_input_1 = require("./profile-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const profile_update_many_mutation_input_1 = require("./profile-update-many-mutation.input");
let ProfileUpdateManyWithWhereWithoutAddressInput = class ProfileUpdateManyWithWhereWithoutAddressInput {
};
__decorate([
    (0, graphql_1.Field)(() => profile_scalar_where_input_1.ProfileScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => profile_scalar_where_input_1.ProfileScalarWhereInput)
], ProfileUpdateManyWithWhereWithoutAddressInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_many_mutation_input_1.ProfileUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => profile_update_many_mutation_input_1.ProfileUpdateManyMutationInput)
], ProfileUpdateManyWithWhereWithoutAddressInput.prototype, "data", void 0);
ProfileUpdateManyWithWhereWithoutAddressInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUpdateManyWithWhereWithoutAddressInput);
exports.ProfileUpdateManyWithWhereWithoutAddressInput = ProfileUpdateManyWithWhereWithoutAddressInput;
//# sourceMappingURL=profile-update-many-with-where-without-address.input.js.map