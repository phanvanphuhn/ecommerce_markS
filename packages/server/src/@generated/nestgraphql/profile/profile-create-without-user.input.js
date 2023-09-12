"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_create_nested_one_without_profiles_input_1 = require("../address/address-create-nested-one-without-profiles.input");
let ProfileCreateWithoutUserInput = class ProfileCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProfileCreateWithoutUserInput.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProfileCreateWithoutUserInput.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_create_nested_one_without_profiles_input_1.AddressCreateNestedOneWithoutProfilesInput, { nullable: true })
], ProfileCreateWithoutUserInput.prototype, "address", void 0);
ProfileCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileCreateWithoutUserInput);
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput;
//# sourceMappingURL=profile-create-without-user.input.js.map