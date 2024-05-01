import { mutationField, nonNull } from 'nexus'

export const SalesDeleteOneMutation = mutationField('deleteOneSales', {
  type: 'Sales',
  args: {
    where: nonNull('SalesWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.sales.delete({
      where,
      ...select,
    })
  },
})
