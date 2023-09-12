"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleType = void 0;
const graphql_1 = require("@nestjs/graphql");
var ScheduleType;
(function (ScheduleType) {
    ScheduleType["CASE_LOG"] = "CASE_LOG";
    ScheduleType["PLAN_CALL"] = "PLAN_CALL";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
(0, graphql_1.registerEnumType)(ScheduleType, { name: 'ScheduleType', description: undefined });
//# sourceMappingURL=schedule-type.enum.js.map