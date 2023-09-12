"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutCaseLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_update_one_without_reporting_by_nested_input_1 = require("./user-update-one-without-reporting-by-nested.input");
const user_update_one_without_reporting_to_nested_input_1 = require("./user-update-one-without-reporting-to-nested.input");
const profile_update_one_without_user_nested_input_1 = require("../profile/profile-update-one-without-user-nested.input");
const schedule_update_many_without_user_nested_input_1 = require("../schedule/schedule-update-many-without-user-nested.input");
const doctor_update_one_without_user_nested_input_1 = require("../doctor/doctor-update-one-without-user-nested.input");
let UserUpdateWithoutCaseLogInput = class UserUpdateWithoutCaseLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_reporting_by_nested_input_1.UserUpdateOneWithoutReportingByNestedInput, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_reporting_to_nested_input_1.UserUpdateOneWithoutReportingToNestedInput, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_one_without_user_nested_input_1.ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_update_many_without_user_nested_input_1.ScheduleUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_update_one_without_user_nested_input_1.DoctorUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutCaseLogInput.prototype, "Doctor", void 0);
UserUpdateWithoutCaseLogInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateWithoutCaseLogInput);
exports.UserUpdateWithoutCaseLogInput = UserUpdateWithoutCaseLogInput;
//# sourceMappingURL=user-update-without-case-log.input.js.map