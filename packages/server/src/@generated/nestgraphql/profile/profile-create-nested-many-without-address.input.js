"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedManyWithoutAddressInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_create_without_address_input_1 = require("./profile-create-without-address.input");
const class_transformer_1 = require("class-transformer");
const profile_create_or_connect_without_address_input_1 = require("./profile-create-or-connect-without-address.input");
const profile_create_many_address_input_envelope_input_1 = require("./profile-create-many-address-input-envelope.input");
const profile_where_unique_input_1 = require("./profile-where-unique.input");
let ProfileCreateNestedManyWithoutAddressInput = class ProfileCreateNestedManyWithoutAddressInput {
};
__decorate([
    (0, graphql_1.Field)(() => [profile_create_without_address_input_1.ProfileCreateWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_without_address_input_1.ProfileCreateWithoutAddressInput)
], ProfileCreateNestedManyWithoutAddressInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_create_or_connect_without_address_input_1.ProfileCreateOrConnectWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_or_connect_without_address_input_1.ProfileCreateOrConnectWithoutAddressInput)
], ProfileCreateNestedManyWithoutAddressInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_create_many_address_input_envelope_input_1.ProfileCreateManyAddressInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_many_address_input_envelope_input_1.ProfileCreateManyAddressInputEnvelope)
], ProfileCreateNestedManyWithoutAddressInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_unique_input_1.ProfileWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_unique_input_1.ProfileWhereUniqueInput)
], ProfileCreateNestedManyWithoutAddressInput.prototype, "connect", void 0);
ProfileCreateNestedManyWithoutAddressInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileCreateNestedManyWithoutAddressInput);
exports.ProfileCreateNestedManyWithoutAddressInput = ProfileCreateNestedManyWithoutAddressInput;
//# sourceMappingURL=profile-create-nested-many-without-address.input.js.map