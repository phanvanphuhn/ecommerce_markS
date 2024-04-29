import { mutationField, nonNull } from 'nexus'

export const SalesDeleteManyMutation = mutationField('deleteManySales', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SalesWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.sales.deleteMany({ where } as any)
  },
})
