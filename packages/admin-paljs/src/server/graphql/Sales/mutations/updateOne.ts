import { mutationField, nonNull } from 'nexus'

export const SalesUpdateOneMutation = mutationField('updateOneSales', {
  type: nonNull('Sales'),
  args: {
    data: nonNull('SalesUpdateInput'),
    where: nonNull('SalesWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.sales.update({
      where,
      data,
      ...select,
    })
  },
})
