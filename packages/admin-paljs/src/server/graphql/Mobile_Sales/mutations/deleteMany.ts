import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesDeleteManyMutation = mutationField('deleteManyMobile_Sales', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'Mobile_SalesWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.mobile_Sales.deleteMany({ where } as any)
  },
})
