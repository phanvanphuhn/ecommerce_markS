"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let CaseLogCreateManyInput = class CaseLogCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], CaseLogCreateManyInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], CaseLogCreateManyInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLogCreateManyInput.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLogCreateManyInput.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLogCreateManyInput.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLogCreateManyInput.prototype, "deleted", void 0);
CaseLogCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], CaseLogCreateManyInput);
exports.CaseLogCreateManyInput = CaseLogCreateManyInput;
//# sourceMappingURL=case-log-create-many.input.js.map