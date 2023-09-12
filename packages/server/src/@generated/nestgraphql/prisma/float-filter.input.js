"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FloatFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let FloatFilter = FloatFilter_1 = class FloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true })
], FloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true })
], FloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true })
], FloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true })
], FloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true })
], FloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true })
], FloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true })
], FloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFilter_1, { nullable: true })
], FloatFilter.prototype, "not", void 0);
FloatFilter = FloatFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], FloatFilter);
exports.FloatFilter = FloatFilter;
//# sourceMappingURL=float-filter.input.js.map