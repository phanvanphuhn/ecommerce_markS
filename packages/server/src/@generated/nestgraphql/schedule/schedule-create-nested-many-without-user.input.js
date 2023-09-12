"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateNestedManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_without_user_input_1 = require("./schedule-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const schedule_create_or_connect_without_user_input_1 = require("./schedule-create-or-connect-without-user.input");
const schedule_create_many_user_input_envelope_input_1 = require("./schedule-create-many-user-input-envelope.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
let ScheduleCreateNestedManyWithoutUserInput = class ScheduleCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [schedule_create_without_user_input_1.ScheduleCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_without_user_input_1.ScheduleCreateWithoutUserInput)
], ScheduleCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_create_or_connect_without_user_input_1.ScheduleCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_or_connect_without_user_input_1.ScheduleCreateOrConnectWithoutUserInput)
], ScheduleCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_many_user_input_envelope_input_1.ScheduleCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_many_user_input_envelope_input_1.ScheduleCreateManyUserInputEnvelope)
], ScheduleCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_unique_input_1.ScheduleWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ScheduleCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleCreateNestedManyWithoutUserInput);
exports.ScheduleCreateNestedManyWithoutUserInput = ScheduleCreateNestedManyWithoutUserInput;
//# sourceMappingURL=schedule-create-nested-many-without-user.input.js.map