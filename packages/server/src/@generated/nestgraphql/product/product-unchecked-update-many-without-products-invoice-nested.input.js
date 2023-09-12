"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const product_create_without_products_invoice_input_1 = require("./product-create-without-products-invoice.input");
const class_transformer_1 = require("class-transformer");
const product_create_or_connect_without_products_invoice_input_1 = require("./product-create-or-connect-without-products-invoice.input");
const product_upsert_with_where_unique_without_products_invoice_input_1 = require("./product-upsert-with-where-unique-without-products-invoice.input");
const product_create_many_products_invoice_input_envelope_input_1 = require("./product-create-many-products-invoice-input-envelope.input");
const product_where_unique_input_1 = require("./product-where-unique.input");
const product_update_with_where_unique_without_products_invoice_input_1 = require("./product-update-with-where-unique-without-products-invoice.input");
const product_update_many_with_where_without_products_invoice_input_1 = require("./product-update-many-with-where-without-products-invoice.input");
const product_scalar_where_input_1 = require("./product-scalar-where.input");
let ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput = class ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_without_products_invoice_input_1.ProductCreateWithoutProductsInvoiceInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_create_or_connect_without_products_invoice_input_1.ProductCreateOrConnectWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_or_connect_without_products_invoice_input_1.ProductCreateOrConnectWithoutProductsInvoiceInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_upsert_with_where_unique_without_products_invoice_input_1.ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_upsert_with_where_unique_without_products_invoice_input_1.ProductUpsertWithWhereUniqueWithoutProductsInvoiceInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_create_many_products_invoice_input_envelope_input_1.ProductCreateManyProductsInvoiceInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => product_create_many_products_invoice_input_envelope_input_1.ProductCreateManyProductsInvoiceInputEnvelope)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_unique_input_1.ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_unique_input_1.ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_unique_input_1.ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_where_unique_input_1.ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_where_unique_input_1.ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_update_with_where_unique_without_products_invoice_input_1.ProductUpdateWithWhereUniqueWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_update_with_where_unique_without_products_invoice_input_1.ProductUpdateWithWhereUniqueWithoutProductsInvoiceInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_update_many_with_where_without_products_invoice_input_1.ProductUpdateManyWithWhereWithoutProductsInvoiceInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_update_many_with_where_without_products_invoice_input_1.ProductUpdateManyWithWhereWithoutProductsInvoiceInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_scalar_where_input_1.ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => product_scalar_where_input_1.ProductScalarWhereInput)
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput.prototype, "deleteMany", void 0);
ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput);
exports.ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput = ProductUncheckedUpdateManyWithoutProductsInvoiceNestedInput;
//# sourceMappingURL=product-unchecked-update-many-without-products-invoice-nested.input.js.map