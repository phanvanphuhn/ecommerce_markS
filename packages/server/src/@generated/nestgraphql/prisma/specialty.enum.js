"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialty = void 0;
const graphql_1 = require("@nestjs/graphql");
var Specialty;
(function (Specialty) {
    Specialty["Orthopedics"] = "Orthopedics";
    Specialty["Surgery"] = "Surgery";
    Specialty["Urology"] = "Urology";
    Specialty["Pediatrics"] = "Pediatrics";
    Specialty["Cardiology"] = "Cardiology";
    Specialty["Neurosurgery"] = "Neurosurgery";
    Specialty["Neurology"] = "Neurology";
    Specialty["Dermatology"] = "Dermatology";
    Specialty["Radiology"] = "Radiology";
})(Specialty = exports.Specialty || (exports.Specialty = {}));
(0, graphql_1.registerEnumType)(Specialty, { name: 'Specialty', description: undefined });
//# sourceMappingURL=specialty.enum.js.map