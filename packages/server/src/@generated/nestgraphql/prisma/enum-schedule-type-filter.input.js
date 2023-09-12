"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnumScheduleTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumScheduleTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("./schedule-type.enum");
let EnumScheduleTypeFilter = EnumScheduleTypeFilter_1 = class EnumScheduleTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], EnumScheduleTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_type_enum_1.ScheduleType], { nullable: true })
], EnumScheduleTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_type_enum_1.ScheduleType], { nullable: true })
], EnumScheduleTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumScheduleTypeFilter_1, { nullable: true })
], EnumScheduleTypeFilter.prototype, "not", void 0);
EnumScheduleTypeFilter = EnumScheduleTypeFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], EnumScheduleTypeFilter);
exports.EnumScheduleTypeFilter = EnumScheduleTypeFilter;
//# sourceMappingURL=enum-schedule-type-filter.input.js.map