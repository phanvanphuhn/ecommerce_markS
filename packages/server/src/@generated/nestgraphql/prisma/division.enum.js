"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
const graphql_1 = require("@nestjs/graphql");
var Division;
(function (Division) {
    Division["Endoscopy"] = "Endoscopy";
    Division["Neuromodulation"] = "Neuromodulation";
    Division["Interventional_Cardiology"] = "Interventional_Cardiology";
    Division["Peripheral_Intervention"] = "Peripheral_Intervention";
    Division["Cardiac_Rhythm_Management"] = "Cardiac_Rhythm_Management";
    Division["Urology_And_Pelvic_Health"] = "Urology_And_Pelvic_Health";
})(Division = exports.Division || (exports.Division = {}));
(0, graphql_1.registerEnumType)(Division, { name: 'Division', description: undefined });
//# sourceMappingURL=division.enum.js.map