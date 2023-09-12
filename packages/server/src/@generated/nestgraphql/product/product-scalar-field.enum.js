"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["name"] = "name";
    ProductScalarFieldEnum["quantity"] = "quantity";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
    ProductScalarFieldEnum["productsInvoiceId"] = "productsInvoiceId";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined });
//# sourceMappingURL=product-scalar-field.enum.js.map