"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutReportingByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_unchecked_update_one_without_user_nested_input_1 = require("../profile/profile-unchecked-update-one-without-user-nested.input");
const schedule_unchecked_update_many_without_user_nested_input_1 = require("../schedule/schedule-unchecked-update-many-without-user-nested.input");
const case_log_unchecked_update_many_without_account_nested_input_1 = require("../case-log/case-log-unchecked-update-many-without-account-nested.input");
const doctor_unchecked_update_one_without_user_nested_input_1 = require("../doctor/doctor-unchecked-update-one-without-user-nested.input");
let UserUncheckedUpdateWithoutReportingByInput = class UserUncheckedUpdateWithoutReportingByInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_update_one_without_user_nested_input_1.ProfileUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_unchecked_update_many_without_user_nested_input_1.ScheduleUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_many_without_account_nested_input_1.CaseLogUncheckedUpdateManyWithoutAccountNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_unchecked_update_one_without_user_nested_input_1.DoctorUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingByInput.prototype, "Doctor", void 0);
UserUncheckedUpdateWithoutReportingByInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutReportingByInput);
exports.UserUncheckedUpdateWithoutReportingByInput = UserUncheckedUpdateWithoutReportingByInput;
//# sourceMappingURL=user-unchecked-update-without-reporting-by.input.js.map