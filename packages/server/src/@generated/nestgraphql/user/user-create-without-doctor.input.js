"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutDoctorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_create_nested_one_without_reporting_by_input_1 = require("./user-create-nested-one-without-reporting-by.input");
const user_create_nested_one_without_reporting_to_input_1 = require("./user-create-nested-one-without-reporting-to.input");
const profile_create_nested_one_without_user_input_1 = require("../profile/profile-create-nested-one-without-user.input");
const schedule_create_nested_many_without_user_input_1 = require("../schedule/schedule-create-nested-many-without-user.input");
const case_log_create_nested_many_without_account_input_1 = require("../case-log/case-log-create-nested-many-without-account.input");
let UserCreateWithoutDoctorInput = class UserCreateWithoutDoctorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutDoctorInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutDoctorInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_reporting_by_input_1.UserCreateNestedOneWithoutReportingByInput, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "reportingTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_reporting_to_input_1.UserCreateNestedOneWithoutReportingToInput, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_create_nested_one_without_user_input_1.ProfileCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => schedule_create_nested_many_without_user_input_1.ScheduleCreateNestedManyWithoutUserInput, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "Schedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_create_nested_many_without_account_input_1.CaseLogCreateNestedManyWithoutAccountInput, { nullable: true })
], UserCreateWithoutDoctorInput.prototype, "CaseLog", void 0);
UserCreateWithoutDoctorInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutDoctorInput);
exports.UserCreateWithoutDoctorInput = UserCreateWithoutDoctorInput;
//# sourceMappingURL=user-create-without-doctor.input.js.map