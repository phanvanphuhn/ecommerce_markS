"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCreateNestedOneWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_create_without_user_input_1 = require("./doctor-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const doctor_create_or_connect_without_user_input_1 = require("./doctor-create-or-connect-without-user.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
let DoctorCreateNestedOneWithoutUserInput = class DoctorCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_create_without_user_input_1.DoctorCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_without_user_input_1.DoctorCreateWithoutUserInput)
], DoctorCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_or_connect_without_user_input_1.DoctorCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_or_connect_without_user_input_1.DoctorCreateOrConnectWithoutUserInput)
], DoctorCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput)
], DoctorCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
DoctorCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorCreateNestedOneWithoutUserInput);
exports.DoctorCreateNestedOneWithoutUserInput = DoctorCreateNestedOneWithoutUserInput;
//# sourceMappingURL=doctor-create-nested-one-without-user.input.js.map