"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUncheckedUpdateOneWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_create_without_user_input_1 = require("./doctor-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const doctor_create_or_connect_without_user_input_1 = require("./doctor-create-or-connect-without-user.input");
const doctor_upsert_without_user_input_1 = require("./doctor-upsert-without-user.input");
const doctor_where_input_1 = require("./doctor-where.input");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
const doctor_update_to_one_with_where_without_user_input_1 = require("./doctor-update-to-one-with-where-without-user.input");
let DoctorUncheckedUpdateOneWithoutUserNestedInput = class DoctorUncheckedUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_create_without_user_input_1.DoctorCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_without_user_input_1.DoctorCreateWithoutUserInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_create_or_connect_without_user_input_1.DoctorCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_create_or_connect_without_user_input_1.DoctorCreateOrConnectWithoutUserInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_upsert_without_user_input_1.DoctorUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_upsert_without_user_input_1.DoctorUpsertWithoutUserInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_to_one_with_where_without_user_input_1.DoctorUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_update_to_one_with_where_without_user_input_1.DoctorUpdateToOneWithWhereWithoutUserInput)
], DoctorUncheckedUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
DoctorUncheckedUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUncheckedUpdateOneWithoutUserNestedInput);
exports.DoctorUncheckedUpdateOneWithoutUserNestedInput = DoctorUncheckedUpdateOneWithoutUserNestedInput;
//# sourceMappingURL=doctor-unchecked-update-one-without-user-nested.input.js.map