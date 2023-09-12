"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const profile_unchecked_update_many_without_address_nested_input_1 = require("../profile/profile-unchecked-update-many-without-address-nested.input");
let AddressUncheckedUpdateInput = class AddressUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_update_many_without_address_nested_input_1.ProfileUncheckedUpdateManyWithoutAddressNestedInput, { nullable: true })
], AddressUncheckedUpdateInput.prototype, "profiles", void 0);
AddressUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], AddressUncheckedUpdateInput);
exports.AddressUncheckedUpdateInput = AddressUncheckedUpdateInput;
//# sourceMappingURL=address-unchecked-update.input.js.map