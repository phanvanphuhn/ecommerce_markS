"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLog = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const doctor_model_1 = require("../doctor/doctor.model");
const products_invoice_model_1 = require("../products-invoice/products-invoice.model");
const schedule_model_1 = require("../schedule/schedule.model");
let CaseLog = class CaseLog {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], CaseLog.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CaseLog.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CaseLog.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CaseLog.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CaseLog.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CaseLog.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLog.prototype, "productsInvoiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CaseLog.prototype, "scheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CaseLog.prototype, "deleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], CaseLog.prototype, "account", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_model_1.Doctor, { nullable: false })
], CaseLog.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_invoice_model_1.ProductsInvoice, { nullable: true })
], CaseLog.prototype, "productsInvoice", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_model_1.Schedule, { nullable: false })
], CaseLog.prototype, "schedule", void 0);
CaseLog = __decorate([
    (0, graphql_2.ObjectType)()
], CaseLog);
exports.CaseLog = CaseLog;
//# sourceMappingURL=case-log.model.js.map