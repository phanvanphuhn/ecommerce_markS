"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateManyWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_scalar_where_input_1 = require("./schedule-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const schedule_update_many_mutation_input_1 = require("./schedule-update-many-mutation.input");
let ScheduleUpdateManyWithWhereWithoutUserInput = class ScheduleUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_scalar_where_input_1.ScheduleScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => schedule_scalar_where_input_1.ScheduleScalarWhereInput)
], ScheduleUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_many_mutation_input_1.ScheduleUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => schedule_update_many_mutation_input_1.ScheduleUpdateManyMutationInput)
], ScheduleUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ScheduleUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ScheduleUpdateManyWithWhereWithoutUserInput);
exports.ScheduleUpdateManyWithWhereWithoutUserInput = ScheduleUpdateManyWithWhereWithoutUserInput;
//# sourceMappingURL=schedule-update-many-with-where-without-user.input.js.map