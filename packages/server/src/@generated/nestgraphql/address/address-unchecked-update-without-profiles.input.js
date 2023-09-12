"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUncheckedUpdateWithoutProfilesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let AddressUncheckedUpdateWithoutProfilesInput = class AddressUncheckedUpdateWithoutProfilesInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], AddressUncheckedUpdateWithoutProfilesInput.prototype, "updatedAt", void 0);
AddressUncheckedUpdateWithoutProfilesInput = __decorate([
    (0, graphql_2.InputType)()
], AddressUncheckedUpdateWithoutProfilesInput);
exports.AddressUncheckedUpdateWithoutProfilesInput = AddressUncheckedUpdateWithoutProfilesInput;
//# sourceMappingURL=address-unchecked-update-without-profiles.input.js.map