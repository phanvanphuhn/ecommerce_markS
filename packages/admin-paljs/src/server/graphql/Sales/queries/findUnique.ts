import { queryField, nonNull } from 'nexus'

export const SalesFindUniqueQuery = queryField('findUniqueSales', {
  type: 'Sales',
  args: {
    where: nonNull('SalesWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.sales.findUnique({
      where,
      ...select,
    })
  },
})
