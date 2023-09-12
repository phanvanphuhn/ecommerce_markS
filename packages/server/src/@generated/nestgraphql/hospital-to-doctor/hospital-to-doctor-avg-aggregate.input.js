"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctorAvgAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let HospitalToDoctorAvgAggregateInput = class HospitalToDoctorAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], HospitalToDoctorAvgAggregateInput.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], HospitalToDoctorAvgAggregateInput.prototype, "doctorId", void 0);
HospitalToDoctorAvgAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], HospitalToDoctorAvgAggregateInput);
exports.HospitalToDoctorAvgAggregateInput = HospitalToDoctorAvgAggregateInput;
//# sourceMappingURL=hospital-to-doctor-avg-aggregate.input.js.map