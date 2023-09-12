"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_where_input_1 = require("./product-where.input");
let ProductListRelationFilter = class ProductListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_where_input_1.ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "none", void 0);
ProductListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], ProductListRelationFilter);
exports.ProductListRelationFilter = ProductListRelationFilter;
//# sourceMappingURL=product-list-relation-filter.input.js.map