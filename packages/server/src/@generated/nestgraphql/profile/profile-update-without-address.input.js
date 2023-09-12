"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithoutAddressInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_one_required_without_profile_nested_input_1 = require("../user/user-update-one-required-without-profile-nested.input");
let ProfileUpdateWithoutAddressInput = class ProfileUpdateWithoutAddressInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUpdateWithoutAddressInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUpdateWithoutAddressInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_profile_nested_input_1.UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
], ProfileUpdateWithoutAddressInput.prototype, "user", void 0);
ProfileUpdateWithoutAddressInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUpdateWithoutAddressInput);
exports.ProfileUpdateWithoutAddressInput = ProfileUpdateWithoutAddressInput;
//# sourceMappingURL=profile-update-without-address.input.js.map