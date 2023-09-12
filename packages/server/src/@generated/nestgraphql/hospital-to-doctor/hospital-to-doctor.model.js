"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalToDoctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_model_1 = require("../hospital/hospital.model");
const doctor_model_1 = require("../doctor/doctor.model");
let HospitalToDoctor = class HospitalToDoctor {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], HospitalToDoctor.prototype, "hospitalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], HospitalToDoctor.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_model_1.Hospital, { nullable: false })
], HospitalToDoctor.prototype, "hospital", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_model_1.Doctor, { nullable: false })
], HospitalToDoctor.prototype, "doctor", void 0);
HospitalToDoctor = __decorate([
    (0, graphql_2.ObjectType)()
], HospitalToDoctor);
exports.HospitalToDoctor = HospitalToDoctor;
//# sourceMappingURL=hospital-to-doctor.model.js.map