"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const address_model_1 = require("../address/address.model");
const user_model_1 = require("../user/user.model");
let Profile = class Profile {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Profile.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Profile.prototype, "mobile", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Profile.prototype, "addressId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Profile.prototype, "preferredLanguage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Profile.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => address_model_1.Address, { nullable: true })
], Profile.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], Profile.prototype, "user", void 0);
Profile = __decorate([
    (0, graphql_2.ObjectType)()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map