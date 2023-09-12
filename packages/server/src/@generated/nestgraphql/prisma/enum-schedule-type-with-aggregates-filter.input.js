"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnumScheduleTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumScheduleTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_type_enum_1 = require("./schedule-type.enum");
const int_filter_input_1 = require("./int-filter.input");
const enum_schedule_type_filter_input_1 = require("./enum-schedule-type-filter.input");
let EnumScheduleTypeWithAggregatesFilter = EnumScheduleTypeWithAggregatesFilter_1 = class EnumScheduleTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_type_enum_1.ScheduleType, { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_type_enum_1.ScheduleType], { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_type_enum_1.ScheduleType], { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumScheduleTypeWithAggregatesFilter_1, { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_schedule_type_filter_input_1.EnumScheduleTypeFilter, { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_schedule_type_filter_input_1.EnumScheduleTypeFilter, { nullable: true })
], EnumScheduleTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumScheduleTypeWithAggregatesFilter = EnumScheduleTypeWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], EnumScheduleTypeWithAggregatesFilter);
exports.EnumScheduleTypeWithAggregatesFilter = EnumScheduleTypeWithAggregatesFilter;
//# sourceMappingURL=enum-schedule-type-with-aggregates-filter.input.js.map