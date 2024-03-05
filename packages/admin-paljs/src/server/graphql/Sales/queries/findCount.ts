import { queryField, nonNull, list } from 'nexus'

export const SalesFindCountQuery = queryField('findManySalesCount', {
  type: nonNull('Int'),
  args: {
    where: 'SalesWhereInput',
    orderBy: list('SalesOrderByWithRelationInput'),
    cursor: 'SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SalesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sales.count(args as any)
  },
})
