"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const profile_unchecked_create_nested_many_without_address_input_1 = require("../profile/profile-unchecked-create-nested-many-without-address.input");
let AddressUncheckedCreateInput = class AddressUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedCreateInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedCreateInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedCreateInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedCreateInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], AddressUncheckedCreateInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_create_nested_many_without_address_input_1.ProfileUncheckedCreateNestedManyWithoutAddressInput, { nullable: true })
], AddressUncheckedCreateInput.prototype, "profiles", void 0);
AddressUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], AddressUncheckedCreateInput);
exports.AddressUncheckedCreateInput = AddressUncheckedCreateInput;
//# sourceMappingURL=address-unchecked-create.input.js.map