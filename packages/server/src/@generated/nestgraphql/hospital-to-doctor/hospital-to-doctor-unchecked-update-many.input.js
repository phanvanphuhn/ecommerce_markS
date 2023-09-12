"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorUncheckedUpdateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let HospitalToDoctorUncheckedUpdateManyInput = class HospitalToDoctorUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalToDoctorUncheckedUpdateManyInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], HospitalToDoctorUncheckedUpdateManyInput.prototype, "doctorId", void 0);
HospitalToDoctorUncheckedUpdateManyInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorUncheckedUpdateManyInput);
exports.HospitalToDoctorUncheckedUpdateManyInput = HospitalToDoctorUncheckedUpdateManyInput;
//# sourceMappingURL=hospital-to-doctor-unchecked-update-many.input.js.map