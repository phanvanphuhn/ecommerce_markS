"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDoctorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const doctor_update_many_mutation_input_1 = require("./doctor-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const doctor_where_input_1 = require("./doctor-where.input");
let UpdateManyDoctorArgs = class UpdateManyDoctorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => doctor_update_many_mutation_input_1.DoctorUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => doctor_update_many_mutation_input_1.DoctorUpdateManyMutationInput)
], UpdateManyDoctorArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => doctor_where_input_1.DoctorWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => doctor_where_input_1.DoctorWhereInput)
], UpdateManyDoctorArgs.prototype, "where", void 0);
UpdateManyDoctorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyDoctorArgs);
exports.UpdateManyDoctorArgs = UpdateManyDoctorArgs;
//# sourceMappingURL=update-many-doctor.args.js.map