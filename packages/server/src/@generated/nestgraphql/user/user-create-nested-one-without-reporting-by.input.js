"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReportingByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_reporting_by_input_1 = require("./user-create-without-reporting-by.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_reporting_by_input_1 = require("./user-create-or-connect-without-reporting-by.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutReportingByInput = class UserCreateNestedOneWithoutReportingByInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_reporting_by_input_1.UserCreateWithoutReportingByInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_reporting_by_input_1.UserCreateWithoutReportingByInput)
], UserCreateNestedOneWithoutReportingByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_reporting_by_input_1.UserCreateOrConnectWithoutReportingByInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_reporting_by_input_1.UserCreateOrConnectWithoutReportingByInput)
], UserCreateNestedOneWithoutReportingByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReportingByInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReportingByInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutReportingByInput);
exports.UserCreateNestedOneWithoutReportingByInput = UserCreateNestedOneWithoutReportingByInput;
//# sourceMappingURL=user-create-nested-one-without-reporting-by.input.js.map