"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedUpdateManyWithoutAddressNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_create_without_address_input_1 = require("./profile-create-without-address.input");
const class_transformer_1 = require("class-transformer");
const profile_create_or_connect_without_address_input_1 = require("./profile-create-or-connect-without-address.input");
const profile_upsert_with_where_unique_without_address_input_1 = require("./profile-upsert-with-where-unique-without-address.input");
const profile_create_many_address_input_envelope_input_1 = require("./profile-create-many-address-input-envelope.input");
const profile_where_unique_input_1 = require("./profile-where-unique.input");
const profile_update_with_where_unique_without_address_input_1 = require("./profile-update-with-where-unique-without-address.input");
const profile_update_many_with_where_without_address_input_1 = require("./profile-update-many-with-where-without-address.input");
const profile_scalar_where_input_1 = require("./profile-scalar-where.input");
let ProfileUncheckedUpdateManyWithoutAddressNestedInput = class ProfileUncheckedUpdateManyWithoutAddressNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [profile_create_without_address_input_1.ProfileCreateWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_without_address_input_1.ProfileCreateWithoutAddressInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_create_or_connect_without_address_input_1.ProfileCreateOrConnectWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_or_connect_without_address_input_1.ProfileCreateOrConnectWithoutAddressInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_upsert_with_where_unique_without_address_input_1.ProfileUpsertWithWhereUniqueWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_upsert_with_where_unique_without_address_input_1.ProfileUpsertWithWhereUniqueWithoutAddressInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_create_many_address_input_envelope_input_1.ProfileCreateManyAddressInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_create_many_address_input_envelope_input_1.ProfileCreateManyAddressInputEnvelope)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_unique_input_1.ProfileWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_unique_input_1.ProfileWhereUniqueInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_unique_input_1.ProfileWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_unique_input_1.ProfileWhereUniqueInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_unique_input_1.ProfileWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_unique_input_1.ProfileWhereUniqueInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_where_unique_input_1.ProfileWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_unique_input_1.ProfileWhereUniqueInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_update_with_where_unique_without_address_input_1.ProfileUpdateWithWhereUniqueWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_update_with_where_unique_without_address_input_1.ProfileUpdateWithWhereUniqueWithoutAddressInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_update_many_with_where_without_address_input_1.ProfileUpdateManyWithWhereWithoutAddressInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_update_many_with_where_without_address_input_1.ProfileUpdateManyWithWhereWithoutAddressInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_scalar_where_input_1.ProfileScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_scalar_where_input_1.ProfileScalarWhereInput)
], ProfileUncheckedUpdateManyWithoutAddressNestedInput.prototype, "deleteMany", void 0);
ProfileUncheckedUpdateManyWithoutAddressNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUncheckedUpdateManyWithoutAddressNestedInput);
exports.ProfileUncheckedUpdateManyWithoutAddressNestedInput = ProfileUncheckedUpdateManyWithoutAddressNestedInput;
//# sourceMappingURL=profile-unchecked-update-many-without-address-nested.input.js.map