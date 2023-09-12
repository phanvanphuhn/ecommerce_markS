"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var HospitalScalarFieldEnum;
(function (HospitalScalarFieldEnum) {
    HospitalScalarFieldEnum["id"] = "id";
    HospitalScalarFieldEnum["name"] = "name";
    HospitalScalarFieldEnum["address"] = "address";
})(HospitalScalarFieldEnum = exports.HospitalScalarFieldEnum || (exports.HospitalScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(HospitalScalarFieldEnum, { name: 'HospitalScalarFieldEnum', description: undefined });
//# sourceMappingURL=hospital-scalar-field.enum.js.map