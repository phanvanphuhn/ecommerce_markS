"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneHospitalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_where_unique_input_1 = require("./hospital-where-unique.input");
const class_transformer_1 = require("class-transformer");
const hospital_create_input_1 = require("./hospital-create.input");
const hospital_update_input_1 = require("./hospital-update.input");
let UpsertOneHospitalArgs = class UpsertOneHospitalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_where_unique_input_1.HospitalWhereUniqueInput)
], UpsertOneHospitalArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_create_input_1.HospitalCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_create_input_1.HospitalCreateInput)
], UpsertOneHospitalArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => hospital_update_input_1.HospitalUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_update_input_1.HospitalUpdateInput)
], UpsertOneHospitalArgs.prototype, "update", void 0);
UpsertOneHospitalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneHospitalArgs);
exports.UpsertOneHospitalArgs = UpsertOneHospitalArgs;
//# sourceMappingURL=upsert-one-hospital.args.js.map