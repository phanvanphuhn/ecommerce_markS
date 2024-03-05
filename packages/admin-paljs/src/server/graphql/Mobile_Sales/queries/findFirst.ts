import { queryField, list } from 'nexus'

export const Mobile_SalesFindFirstQuery = queryField('findFirstMobile_Sales', {
  type: 'Mobile_Sales',
  args: {
    where: 'Mobile_SalesWhereInput',
    orderBy: list('Mobile_SalesOrderByWithRelationInput'),
    cursor: 'Mobile_SalesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('Mobile_SalesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.mobile_Sales.findFirst({
      ...args,
      ...select,
    })
  },
})
