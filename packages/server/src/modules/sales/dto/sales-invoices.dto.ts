import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql';
import { SalesInvoices as SalesInvoicesGenerated } from '@generated/nestgraphql/sales-invoices/sales-invoices.model';
import { FindManySalesInvoicesArgs } from '@generated/nestgraphql/sales-invoices/find-many-sales-invoices.args';

import { OrderDirection } from '@/common/pagination/order-direction';

@ObjectType()
export class SalesInvoicesOutput extends SalesInvoicesGenerated {
  constructor(data: SalesInvoicesGenerated) {
    super();

    Object.assign(this, data);
  }
}

@ArgsType()
export class SalesInvoicesFilterArgs extends OmitType(SalesInvoicesGenerated, [
  'salesRepEmail',
]) {
  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => OrderDirection, { nullable: true })
  orderBy?: OrderDirection;
}
