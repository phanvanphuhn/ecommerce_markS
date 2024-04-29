import { queryField, nonNull, list } from 'nexus'

export const Mobile_SalesFindManyQuery = queryField('findManyMobile_Sales', {
  type: nonNull(list(nonNull('Mobile_Sales'))),
  args: {
    where: 'Mobile_SalesWhereInput',
    orderBy: list('Mobile_SalesOrderByWithRelationInput'),
    cursor: 'Mobile_SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('Mobile_SalesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.mobile_Sales.findMany({
      ...args,
      ...select,
    })
  },
})
