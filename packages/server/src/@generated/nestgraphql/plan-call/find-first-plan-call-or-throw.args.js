"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPlanCallOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const plan_call_where_input_1 = require("./plan-call-where.input");
const class_transformer_1 = require("class-transformer");
const plan_call_order_by_with_relation_input_1 = require("./plan-call-order-by-with-relation.input");
const plan_call_where_unique_input_1 = require("./plan-call-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const plan_call_scalar_field_enum_1 = require("./plan-call-scalar-field.enum");
let FindFirstPlanCallOrThrowArgs = class FindFirstPlanCallOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => plan_call_where_input_1.PlanCallWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => plan_call_where_input_1.PlanCallWhereInput)
], FindFirstPlanCallOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_order_by_with_relation_input_1.PlanCallOrderByWithRelationInput], { nullable: true })
], FindFirstPlanCallOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => plan_call_where_unique_input_1.PlanCallWhereUniqueInput, { nullable: true })
], FindFirstPlanCallOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstPlanCallOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstPlanCallOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_call_scalar_field_enum_1.PlanCallScalarFieldEnum], { nullable: true })
], FindFirstPlanCallOrThrowArgs.prototype, "distinct", void 0);
FindFirstPlanCallOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstPlanCallOrThrowArgs);
exports.FindFirstPlanCallOrThrowArgs = FindFirstPlanCallOrThrowArgs;
//# sourceMappingURL=find-first-plan-call-or-throw.args.js.map