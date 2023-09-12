"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanCallScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PlanCallScalarFieldEnum;
(function (PlanCallScalarFieldEnum) {
    PlanCallScalarFieldEnum["id"] = "id";
    PlanCallScalarFieldEnum["createdAt"] = "createdAt";
    PlanCallScalarFieldEnum["updatedAt"] = "updatedAt";
    PlanCallScalarFieldEnum["outcome"] = "outcome";
    PlanCallScalarFieldEnum["type"] = "type";
    PlanCallScalarFieldEnum["description"] = "description";
    PlanCallScalarFieldEnum["topics"] = "topics";
    PlanCallScalarFieldEnum["scheduleId"] = "scheduleId";
    PlanCallScalarFieldEnum["deleted"] = "deleted";
})(PlanCallScalarFieldEnum = exports.PlanCallScalarFieldEnum || (exports.PlanCallScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PlanCallScalarFieldEnum, { name: 'PlanCallScalarFieldEnum', description: undefined });
//# sourceMappingURL=plan-call-scalar-field.enum.js.map