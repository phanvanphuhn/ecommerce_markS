"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneHospitalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const hospital_create_input_1 = require("./hospital-create.input");
const class_transformer_1 = require("class-transformer");
let CreateOneHospitalArgs = class CreateOneHospitalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => hospital_create_input_1.HospitalCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => hospital_create_input_1.HospitalCreateInput)
], CreateOneHospitalArgs.prototype, "data", void 0);
CreateOneHospitalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneHospitalArgs);
exports.CreateOneHospitalArgs = CreateOneHospitalArgs;
//# sourceMappingURL=create-one-hospital.args.js.map