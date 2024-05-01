import { queryField, list } from 'nexus'

export const Mobile_SalesAggregateQuery = queryField('aggregateMobile_Sales', {
  type: 'AggregateMobile_Sales',
  args: {
    where: 'Mobile_SalesWhereInput',
    orderBy: list('Mobile_SalesOrderByWithRelationInput'),
    cursor: 'Mobile_SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.mobile_Sales.aggregate({ ...args, ...select }) as any
  },
})
