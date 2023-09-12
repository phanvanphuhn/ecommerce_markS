"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutReportingByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_update_one_without_reporting_by_nested_input_1 = require("./user-update-one-without-reporting-by-nested.input");
const profile_update_one_without_user_nested_input_1 = require("../profile/profile-update-one-without-user-nested.input");
const schedule_update_many_without_user_nested_input_1 = require("../schedule/schedule-update-many-without-user-nested.input");
const case_log_update_many_without_account_nested_input_1 = require("../case-log/case-log-update-many-without-account-nested.input");
const doctor_update_one_without_user_nested_input_1 = require("../doctor/doctor-update-one-without-user-nested.input");
let UserUpdateWithoutReportingByInput = class UserUpdateWithoutReportingByInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_reporting_by_nested_input_1.UserUpdateOneWithoutReportingByNestedInput, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_one_without_user_nested_input_1.ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_many_without_user_nested_input_1.ScheduleUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_update_many_without_account_nested_input_1.CaseLogUpdateManyWithoutAccountNestedInput, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_one_without_user_nested_input_1.DoctorUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutReportingByInput.prototype, "Doctor", void 0);
UserUpdateWithoutReportingByInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateWithoutReportingByInput);
exports.UserUpdateWithoutReportingByInput = UserUpdateWithoutReportingByInput;
//# sourceMappingURL=user-update-without-reporting-by.input.js.map