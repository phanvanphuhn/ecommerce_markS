"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutReportingToNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_reporting_to_input_1 = require("./user-create-without-reporting-to.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_reporting_to_input_1 = require("./user-create-or-connect-without-reporting-to.input");
const user_upsert_without_reporting_to_input_1 = require("./user-upsert-without-reporting-to.input");
const user_where_input_1 = require("./user-where.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_reporting_to_input_1 = require("./user-update-to-one-with-where-without-reporting-to.input");
let UserUpdateOneWithoutReportingToNestedInput = class UserUpdateOneWithoutReportingToNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_reporting_to_input_1.UserCreateWithoutReportingToInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_reporting_to_input_1.UserCreateWithoutReportingToInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_reporting_to_input_1.UserCreateOrConnectWithoutReportingToInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_reporting_to_input_1.UserCreateOrConnectWithoutReportingToInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_reporting_to_input_1.UserUpsertWithoutReportingToInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_reporting_to_input_1.UserUpsertWithoutReportingToInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_reporting_to_input_1.UserUpdateToOneWithWhereWithoutReportingToInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_reporting_to_input_1.UserUpdateToOneWithWhereWithoutReportingToInput)
], UserUpdateOneWithoutReportingToNestedInput.prototype, "update", void 0);
UserUpdateOneWithoutReportingToNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutReportingToNestedInput);
exports.UserUpdateOneWithoutReportingToNestedInput = UserUpdateOneWithoutReportingToNestedInput;
//# sourceMappingURL=user-update-one-without-reporting-to-nested.input.js.map