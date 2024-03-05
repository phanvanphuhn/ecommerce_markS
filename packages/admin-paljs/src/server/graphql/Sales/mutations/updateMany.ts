import { mutationField, nonNull } from 'nexus'

export const SalesUpdateManyMutation = mutationField('updateManySales', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('SalesUpdateManyMutationInput'),
    where: 'SalesWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sales.updateMany(args as any)
  },
})
