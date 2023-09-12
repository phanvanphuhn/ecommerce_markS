"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_update_many_without_address_nested_input_1 = require("../profile/profile-update-many-without-address-nested.input");
let AddressUpdateInput = class AddressUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUpdateInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUpdateInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUpdateInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUpdateInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUpdateInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_many_without_address_nested_input_1.ProfileUpdateManyWithoutAddressNestedInput, { nullable: true })
], AddressUpdateInput.prototype, "profiles", void 0);
AddressUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], AddressUpdateInput);
exports.AddressUpdateInput = AddressUpdateInput;
//# sourceMappingURL=address-update.input.js.map