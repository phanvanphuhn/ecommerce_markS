"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutReportingToInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_unchecked_update_one_without_reporting_to_nested_input_1 = require("./user-unchecked-update-one-without-reporting-to-nested.input");
const profile_unchecked_update_one_without_user_nested_input_1 = require("../profile/profile-unchecked-update-one-without-user-nested.input");
const schedule_unchecked_update_many_without_user_nested_input_1 = require("../schedule/schedule-unchecked-update-many-without-user-nested.input");
const case_log_unchecked_update_many_without_account_nested_input_1 = require("../case-log/case-log-unchecked-update-many-without-account-nested.input");
const doctor_unchecked_update_one_without_user_nested_input_1 = require("../doctor/doctor-unchecked-update-one-without-user-nested.input");
let UserUncheckedUpdateWithoutReportingToInput = class UserUncheckedUpdateWithoutReportingToInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_unchecked_update_one_without_reporting_to_nested_input_1.UserUncheckedUpdateOneWithoutReportingToNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_update_one_without_user_nested_input_1.ProfileUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_unchecked_update_many_without_user_nested_input_1.ScheduleUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_update_many_without_account_nested_input_1.CaseLogUncheckedUpdateManyWithoutAccountNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_unchecked_update_one_without_user_nested_input_1.DoctorUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateWithoutReportingToInput.prototype, "Doctor", void 0);
UserUncheckedUpdateWithoutReportingToInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutReportingToInput);
exports.UserUncheckedUpdateWithoutReportingToInput = UserUncheckedUpdateWithoutReportingToInput;
//# sourceMappingURL=user-unchecked-update-without-reporting-to.input.js.map