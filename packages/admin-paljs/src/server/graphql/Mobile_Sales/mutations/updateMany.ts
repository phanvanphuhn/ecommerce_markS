import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesUpdateManyMutation = mutationField('updateManyMobile_Sales', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('Mobile_SalesUpdateManyMutationInput'),
    where: 'Mobile_SalesWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.mobile_Sales.updateMany(args as any)
  },
})
