"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneWithoutProfilesNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_create_without_profiles_input_1 = require("./address-create-without-profiles.input");
const class_transformer_1 = require("class-transformer");
const address_create_or_connect_without_profiles_input_1 = require("./address-create-or-connect-without-profiles.input");
const address_upsert_without_profiles_input_1 = require("./address-upsert-without-profiles.input");
const address_where_input_1 = require("./address-where.input");
const address_where_unique_input_1 = require("./address-where-unique.input");
const address_update_to_one_with_where_without_profiles_input_1 = require("./address-update-to-one-with-where-without-profiles.input");
let AddressUpdateOneWithoutProfilesNestedInput = class AddressUpdateOneWithoutProfilesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => address_create_without_profiles_input_1.AddressCreateWithoutProfilesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_create_without_profiles_input_1.AddressCreateWithoutProfilesInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_create_or_connect_without_profiles_input_1.AddressCreateOrConnectWithoutProfilesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_create_or_connect_without_profiles_input_1.AddressCreateOrConnectWithoutProfilesInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_upsert_without_profiles_input_1.AddressUpsertWithoutProfilesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_upsert_without_profiles_input_1.AddressUpsertWithoutProfilesInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_input_1.AddressWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_input_1.AddressWhereInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_where_unique_input_1.AddressWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_where_unique_input_1.AddressWhereUniqueInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_update_to_one_with_where_without_profiles_input_1.AddressUpdateToOneWithWhereWithoutProfilesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => address_update_to_one_with_where_without_profiles_input_1.AddressUpdateToOneWithWhereWithoutProfilesInput)
], AddressUpdateOneWithoutProfilesNestedInput.prototype, "update", void 0);
AddressUpdateOneWithoutProfilesNestedInput = __decorate([
    (0, graphql_2.InputType)()
], AddressUpdateOneWithoutProfilesNestedInput);
exports.AddressUpdateOneWithoutProfilesNestedInput = AddressUpdateOneWithoutProfilesNestedInput;
//# sourceMappingURL=address-update-one-without-profiles-nested.input.js.map