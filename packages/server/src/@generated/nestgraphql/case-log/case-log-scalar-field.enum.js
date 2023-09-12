"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CaseLogScalarFieldEnum;
(function (CaseLogScalarFieldEnum) {
    CaseLogScalarFieldEnum["id"] = "id";
    CaseLogScalarFieldEnum["createdAt"] = "createdAt";
    CaseLogScalarFieldEnum["updatedAt"] = "updatedAt";
    CaseLogScalarFieldEnum["accountId"] = "accountId";
    CaseLogScalarFieldEnum["doctorId"] = "doctorId";
    CaseLogScalarFieldEnum["photoUrl"] = "photoUrl";
    CaseLogScalarFieldEnum["productsInvoiceId"] = "productsInvoiceId";
    CaseLogScalarFieldEnum["scheduleId"] = "scheduleId";
    CaseLogScalarFieldEnum["deleted"] = "deleted";
})(CaseLogScalarFieldEnum = exports.CaseLogScalarFieldEnum || (exports.CaseLogScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CaseLogScalarFieldEnum, { name: 'CaseLogScalarFieldEnum', description: undefined });
//# sourceMappingURL=case-log-scalar-field.enum.js.map