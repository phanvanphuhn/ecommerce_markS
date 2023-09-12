"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const hospital_to_doctor_model_1 = require("../hospital-to-doctor/hospital-to-doctor.model");
const hospital_count_output_1 = require("./hospital-count.output");
let Hospital = class Hospital {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Hospital.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Hospital.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Hospital.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => [hospital_to_doctor_model_1.HospitalToDoctor], { nullable: true })
], Hospital.prototype, "doctors", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_count_output_1.HospitalCount, { nullable: false })
], Hospital.prototype, "_count", void 0);
Hospital = __decorate([
    (0, graphql_2.ObjectType)()
], Hospital);
exports.Hospital = Hospital;
//# sourceMappingURL=hospital.model.js.map