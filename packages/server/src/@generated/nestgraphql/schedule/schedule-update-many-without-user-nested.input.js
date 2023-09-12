"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_create_without_user_input_1 = require("./schedule-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const schedule_create_or_connect_without_user_input_1 = require("./schedule-create-or-connect-without-user.input");
const schedule_upsert_with_where_unique_without_user_input_1 = require("./schedule-upsert-with-where-unique-without-user.input");
const schedule_create_many_user_input_envelope_input_1 = require("./schedule-create-many-user-input-envelope.input");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
const schedule_update_with_where_unique_without_user_input_1 = require("./schedule-update-with-where-unique-without-user.input");
const schedule_update_many_with_where_without_user_input_1 = require("./schedule-update-many-with-where-without-user.input");
const schedule_scalar_where_input_1 = require("./schedule-scalar-where.input");
let ScheduleUpdateManyWithoutUserNestedInput = class ScheduleUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [schedule_create_without_user_input_1.ScheduleCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_without_user_input_1.ScheduleCreateWithoutUserInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_create_or_connect_without_user_input_1.ScheduleCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_or_connect_without_user_input_1.ScheduleCreateOrConnectWithoutUserInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_upsert_with_where_unique_without_user_input_1.ScheduleUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_upsert_with_where_unique_without_user_input_1.ScheduleUpsertWithWhereUniqueWithoutUserInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_many_user_input_envelope_input_1.ScheduleCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_create_many_user_input_envelope_input_1.ScheduleCreateManyUserInputEnvelope)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_unique_input_1.ScheduleWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_unique_input_1.ScheduleWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_unique_input_1.ScheduleWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_where_unique_input_1.ScheduleWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_update_with_where_unique_without_user_input_1.ScheduleUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_update_with_where_unique_without_user_input_1.ScheduleUpdateWithWhereUniqueWithoutUserInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_update_many_with_where_without_user_input_1.ScheduleUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_update_many_with_where_without_user_input_1.ScheduleUpdateManyWithWhereWithoutUserInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_scalar_where_input_1.ScheduleScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => schedule_scalar_where_input_1.ScheduleScalarWhereInput)
], ScheduleUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
ScheduleUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateManyWithoutUserNestedInput);
exports.ScheduleUpdateManyWithoutUserNestedInput = ScheduleUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=schedule-update-many-without-user-nested.input.js.map