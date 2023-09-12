"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const graphql_4 = require("@nestjs/graphql");
const profile_model_1 = require("../profile/profile.model");
const schedule_model_1 = require("../schedule/schedule.model");
const case_log_model_1 = require("../case-log/case-log.model");
const doctor_model_1 = require("../doctor/doctor.model");
const user_count_output_1 = require("./user-count.output");
let User = User_1 = class User {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false, defaultValue: 'USER' })
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], User.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => User_1, { nullable: true })
], User.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => User_1, { nullable: true })
], User.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_model_1.Profile, { nullable: true })
], User.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => [schedule_model_1.Schedule], { nullable: true })
], User.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => [case_log_model_1.CaseLog], { nullable: true })
], User.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_model_1.Doctor, { nullable: true })
], User.prototype, "Doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_output_1.UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = User_1 = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map