"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorUpdateToOneWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_where_input_1 = require("./doctor-where.input");
const class_transformer_1 = require("class-transformer");
const doctor_update_without_user_input_1 = require("./doctor-update-without-user.input");
let DoctorUpdateToOneWithWhereWithoutUserInput = class DoctorUpdateToOneWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], DoctorUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_without_user_input_1.DoctorUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => doctor_update_without_user_input_1.DoctorUpdateWithoutUserInput)
], DoctorUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
DoctorUpdateToOneWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorUpdateToOneWithWhereWithoutUserInput);
exports.DoctorUpdateToOneWithWhereWithoutUserInput = DoctorUpdateToOneWithWhereWithoutUserInput;
//# sourceMappingURL=doctor-update-to-one-with-where-without-user.input.js.map