"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DoctorScalarFieldEnum;
(function (DoctorScalarFieldEnum) {
    DoctorScalarFieldEnum["id"] = "id";
    DoctorScalarFieldEnum["title"] = "title";
    DoctorScalarFieldEnum["userId"] = "userId";
    DoctorScalarFieldEnum["specialties"] = "specialties";
    DoctorScalarFieldEnum["divisions"] = "divisions";
})(DoctorScalarFieldEnum = exports.DoctorScalarFieldEnum || (exports.DoctorScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DoctorScalarFieldEnum, { name: 'DoctorScalarFieldEnum', description: undefined });
//# sourceMappingURL=doctor-scalar-field.enum.js.map