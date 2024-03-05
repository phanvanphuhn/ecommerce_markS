import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesDeleteOneMutation = mutationField('deleteOneMobile_Sales', {
  type: 'Mobile_Sales',
  args: {
    where: nonNull('Mobile_SalesWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.mobile_Sales.delete({
      where,
      ...select,
    })
  },
})
