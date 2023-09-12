"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyHospitalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_update_many_mutation_input_1 = require("./hospital-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const hospital_where_input_1 = require("./hospital-where.input");
let UpdateManyHospitalArgs = class UpdateManyHospitalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_update_many_mutation_input_1.HospitalUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_update_many_mutation_input_1.HospitalUpdateManyMutationInput)
], UpdateManyHospitalArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_where_input_1.HospitalWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => hospital_where_input_1.HospitalWhereInput)
], UpdateManyHospitalArgs.prototype, "where", void 0);
UpdateManyHospitalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyHospitalArgs);
exports.UpdateManyHospitalArgs = UpdateManyHospitalArgs;
//# sourceMappingURL=update-many-hospital.args.js.map