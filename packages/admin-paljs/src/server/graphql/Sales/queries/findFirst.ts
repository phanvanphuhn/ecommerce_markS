import { queryField, list } from 'nexus'

export const SalesFindFirstQuery = queryField('findFirstSales', {
  type: 'Sales',
  args: {
    where: 'SalesWhereInput',
    orderBy: list('SalesOrderByWithRelationInput'),
    cursor: 'SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SalesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sales.findFirst({
      ...args,
      ...select,
    })
  },
})
