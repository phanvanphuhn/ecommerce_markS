import { queryField, nonNull } from 'nexus'

export const Mobile_SalesFindUniqueQuery = queryField('findUniqueMobile_Sales', {
  type: 'Mobile_Sales',
  args: {
    where: nonNull('Mobile_SalesWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.mobile_Sales.findUnique({
      where,
      ...select,
    })
  },
})
