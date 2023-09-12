"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProfileNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_profile_input_1 = require("./user-create-without-profile.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_profile_input_1 = require("./user-create-or-connect-without-profile.input");
const user_upsert_without_profile_input_1 = require("./user-upsert-without-profile.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_profile_input_1 = require("./user-update-to-one-with-where-without-profile.input");
let UserUpdateOneRequiredWithoutProfileNestedInput = class UserUpdateOneRequiredWithoutProfileNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_profile_input_1.UserCreateWithoutProfileInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_profile_input_1.UserCreateWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_profile_input_1.UserCreateOrConnectWithoutProfileInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_profile_input_1.UserCreateOrConnectWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_profile_input_1.UserUpsertWithoutProfileInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_profile_input_1.UserUpsertWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_profile_input_1.UserUpdateToOneWithWhereWithoutProfileInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_profile_input_1.UserUpdateToOneWithWhereWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutProfileNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneRequiredWithoutProfileNestedInput);
exports.UserUpdateOneRequiredWithoutProfileNestedInput = UserUpdateOneRequiredWithoutProfileNestedInput;
//# sourceMappingURL=user-update-one-required-without-profile-nested.input.js.map