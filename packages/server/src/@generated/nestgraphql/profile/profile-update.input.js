"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_update_one_without_profiles_nested_input_1 = require("../address/address-update-one-without-profiles-nested.input");
const user_update_one_required_without_profile_nested_input_1 = require("../user/user-update-one-required-without-profile-nested.input");
let ProfileUpdateInput = class ProfileUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUpdateInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUpdateInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_update_one_without_profiles_nested_input_1.AddressUpdateOneWithoutProfilesNestedInput, { nullable: true })
], ProfileUpdateInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_profile_nested_input_1.UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
], ProfileUpdateInput.prototype, "user", void 0);
ProfileUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUpdateInput);
exports.ProfileUpdateInput = ProfileUpdateInput;
//# sourceMappingURL=profile-update.input.js.map