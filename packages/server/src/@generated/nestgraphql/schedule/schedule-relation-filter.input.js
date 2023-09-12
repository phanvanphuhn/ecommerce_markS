"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const schedule_where_input_1 = require("./schedule-where.input");
let ScheduleRelationFilter = class ScheduleRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => schedule_where_input_1.ScheduleWhereInput, { nullable: true })
], ScheduleRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_where_input_1.ScheduleWhereInput, { nullable: true })
], ScheduleRelationFilter.prototype, "isNot", void 0);
ScheduleRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], ScheduleRelationFilter);
exports.ScheduleRelationFilter = ScheduleRelationFilter;
//# sourceMappingURL=schedule-relation-filter.input.js.map