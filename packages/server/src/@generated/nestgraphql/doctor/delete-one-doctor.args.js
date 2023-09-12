"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDoctorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_where_unique_input_1 = require("./doctor-where-unique.input");
const class_transformer_1 = require("class-transformer");
let DeleteOneDoctorArgs = class DeleteOneDoctorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => doctor_where_unique_input_1.DoctorWhereUniqueInput)
], DeleteOneDoctorArgs.prototype, "where", void 0);
DeleteOneDoctorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOneDoctorArgs);
exports.DeleteOneDoctorArgs = DeleteOneDoctorArgs;
//# sourceMappingURL=delete-one-doctor.args.js.map