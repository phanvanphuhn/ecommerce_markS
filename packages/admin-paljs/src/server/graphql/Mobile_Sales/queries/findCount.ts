import { queryField, nonNull, list } from 'nexus'

export const Mobile_SalesFindCountQuery = queryField(
  'findManyMobile_SalesCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'Mobile_SalesWhereInput',
      orderBy: list('Mobile_SalesOrderByWithRelationInput'),
      cursor: 'Mobile_SalesWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('Mobile_SalesScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.mobile_Sales.count(args as any)
    },
  },
)
