"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var AddressScalarFieldEnum;
(function (AddressScalarFieldEnum) {
    AddressScalarFieldEnum["id"] = "id";
    AddressScalarFieldEnum["street"] = "street";
    AddressScalarFieldEnum["city"] = "city";
    AddressScalarFieldEnum["state"] = "state";
    AddressScalarFieldEnum["zip"] = "zip";
    AddressScalarFieldEnum["country"] = "country";
    AddressScalarFieldEnum["createdAt"] = "createdAt";
    AddressScalarFieldEnum["updatedAt"] = "updatedAt";
})(AddressScalarFieldEnum = exports.AddressScalarFieldEnum || (exports.AddressScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined });
//# sourceMappingURL=address-scalar-field.enum.js.map