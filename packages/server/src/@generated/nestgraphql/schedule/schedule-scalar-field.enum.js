"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ScheduleScalarFieldEnum;
(function (ScheduleScalarFieldEnum) {
    ScheduleScalarFieldEnum["id"] = "id";
    ScheduleScalarFieldEnum["createdAt"] = "createdAt";
    ScheduleScalarFieldEnum["updatedAt"] = "updatedAt";
    ScheduleScalarFieldEnum["subject"] = "subject";
    ScheduleScalarFieldEnum["location"] = "location";
    ScheduleScalarFieldEnum["time"] = "time";
    ScheduleScalarFieldEnum["endDate"] = "endDate";
    ScheduleScalarFieldEnum["startDate"] = "startDate";
    ScheduleScalarFieldEnum["scheduleType"] = "scheduleType";
    ScheduleScalarFieldEnum["userId"] = "userId";
    ScheduleScalarFieldEnum["deleted"] = "deleted";
})(ScheduleScalarFieldEnum = exports.ScheduleScalarFieldEnum || (exports.ScheduleScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ScheduleScalarFieldEnum, { name: 'ScheduleScalarFieldEnum', description: undefined });
//# sourceMappingURL=schedule-scalar-field.enum.js.map