"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_unchecked_create_nested_one_without_reporting_to_input_1 = require("./user-unchecked-create-nested-one-without-reporting-to.input");
const profile_unchecked_create_nested_one_without_user_input_1 = require("../profile/profile-unchecked-create-nested-one-without-user.input");
const case_log_unchecked_create_nested_many_without_account_input_1 = require("../case-log/case-log-unchecked-create-nested-many-without-account.input");
const doctor_unchecked_create_nested_one_without_user_input_1 = require("../doctor/doctor-unchecked-create-nested-one-without-user.input");
let UserUncheckedCreateWithoutScheduleInput = class UserUncheckedCreateWithoutScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutScheduleInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutScheduleInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "reportingToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_unchecked_create_nested_one_without_reporting_to_input_1.UserUncheckedCreateNestedOneWithoutReportingToInput, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "reportingBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_create_nested_one_without_user_input_1.ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => case_log_unchecked_create_nested_many_without_account_input_1.CaseLogUncheckedCreateNestedManyWithoutAccountInput, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "CaseLog", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_unchecked_create_nested_one_without_user_input_1.DoctorUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutScheduleInput.prototype, "Doctor", void 0);
UserUncheckedCreateWithoutScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutScheduleInput);
exports.UserUncheckedCreateWithoutScheduleInput = UserUncheckedCreateWithoutScheduleInput;
//# sourceMappingURL=user-unchecked-create-without-schedule.input.js.map