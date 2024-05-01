import { queryField, list } from 'nexus'

export const SalesAggregateQuery = queryField('aggregateSales', {
  type: 'AggregateSales',
  args: {
    where: 'SalesWhereInput',
    orderBy: list('SalesOrderByWithRelationInput'),
    cursor: 'SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sales.aggregate({ ...args, ...select }) as any
  },
})
