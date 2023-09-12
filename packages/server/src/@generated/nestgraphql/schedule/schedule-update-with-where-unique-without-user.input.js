"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_where_unique_input_1 = require("./schedule-where-unique.input");
const class_transformer_1 = require("class-transformer");
const schedule_update_without_user_input_1 = require("./schedule-update-without-user.input");
let ScheduleUpdateWithWhereUniqueWithoutUserInput = class ScheduleUpdateWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => schedule_where_unique_input_1.ScheduleWhereUniqueInput)
], ScheduleUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_without_user_input_1.ScheduleUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => schedule_update_without_user_input_1.ScheduleUpdateWithoutUserInput)
], ScheduleUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ScheduleUpdateWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateWithWhereUniqueWithoutUserInput);
exports.ScheduleUpdateWithWhereUniqueWithoutUserInput = ScheduleUpdateWithWhereUniqueWithoutUserInput;
//# sourceMappingURL=schedule-update-with-where-unique-without-user.input.js.map