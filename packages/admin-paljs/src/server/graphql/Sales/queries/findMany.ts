import { queryField, nonNull, list } from 'nexus'

export const SalesFindManyQuery = queryField('findManySales', {
  type: nonNull(list(nonNull('Sales'))),
  args: {
    where: 'SalesWhereInput',
    orderBy: list('SalesOrderByWithRelationInput'),
    cursor: 'SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SalesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sales.findMany({
      ...args,
      ...select,
    })
  },
})
