"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const profile_model_1 = require("../profile/profile.model");
const address_count_output_1 = require("./address-count.output");
let Address = class Address {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Address.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Address.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Address.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Address.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Address.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Address.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Address.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_model_1.Profile], { nullable: true })
], Address.prototype, "profiles", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_count_output_1.AddressCount, { nullable: false })
], Address.prototype, "_count", void 0);
Address = __decorate([
    (0, graphql_2.ObjectType)()
], Address);
exports.Address = Address;
//# sourceMappingURL=address.model.js.map