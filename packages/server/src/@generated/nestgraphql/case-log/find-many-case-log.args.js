"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCaseLogArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const case_log_where_input_1 = require("./case-log-where.input");
const class_transformer_1 = require("class-transformer");
const case_log_order_by_with_relation_input_1 = require("./case-log-order-by-with-relation.input");
const case_log_where_unique_input_1 = require("./case-log-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const case_log_scalar_field_enum_1 = require("./case-log-scalar-field.enum");
let FindManyCaseLogArgs = class FindManyCaseLogArgs {
};
__decorate([
    (0, graphql_1.Field)(() => case_log_where_input_1.CaseLogWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => case_log_where_input_1.CaseLogWhereInput)
], FindManyCaseLogArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_order_by_with_relation_input_1.CaseLogOrderByWithRelationInput], { nullable: true })
], FindManyCaseLogArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_where_unique_input_1.CaseLogWhereUniqueInput, { nullable: true })
], FindManyCaseLogArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyCaseLogArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyCaseLogArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_scalar_field_enum_1.CaseLogScalarFieldEnum], { nullable: true })
], FindManyCaseLogArgs.prototype, "distinct", void 0);
FindManyCaseLogArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyCaseLogArgs);
exports.FindManyCaseLogArgs = FindManyCaseLogArgs;
//# sourceMappingURL=find-many-case-log.args.js.map