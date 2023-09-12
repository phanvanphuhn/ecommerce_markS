"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let DoctorCountAggregateInput = class DoctorCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "specialties", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "divisions", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DoctorCountAggregateInput.prototype, "_all", void 0);
DoctorCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], DoctorCountAggregateInput);
exports.DoctorCountAggregateInput = DoctorCountAggregateInput;
//# sourceMappingURL=doctor-count-aggregate.input.js.map