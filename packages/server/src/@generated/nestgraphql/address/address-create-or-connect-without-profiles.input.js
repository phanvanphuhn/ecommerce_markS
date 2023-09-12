"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutProfilesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const address_where_unique_input_1 = require("./address-where-unique.input");
const class_transformer_1 = require("class-transformer");
const address_create_without_profiles_input_1 = require("./address-create-without-profiles.input");
let AddressCreateOrConnectWithoutProfilesInput = class AddressCreateOrConnectWithoutProfilesInput {
};
__decorate([
    (0, graphql_1.Field)(() => address_where_unique_input_1.AddressWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => address_where_unique_input_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutProfilesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_create_without_profiles_input_1.AddressCreateWithoutProfilesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => address_create_without_profiles_input_1.AddressCreateWithoutProfilesInput)
], AddressCreateOrConnectWithoutProfilesInput.prototype, "create", void 0);
AddressCreateOrConnectWithoutProfilesInput = __decorate([
    (0, graphql_2.InputType)()
], AddressCreateOrConnectWithoutProfilesInput);
exports.AddressCreateOrConnectWithoutProfilesInput = AddressCreateOrConnectWithoutProfilesInput;
//# sourceMappingURL=address-create-or-connect-without-profiles.input.js.map