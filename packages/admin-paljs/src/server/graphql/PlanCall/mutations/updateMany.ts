import { mutationField, nonNull } from 'nexus'

export const PlanCallUpdateManyMutation = mutationField('updateManyPlanCall', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('PlanCallUpdateManyMutationInput'),
    where: 'PlanCallWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.planCall.updateMany(args as any)
  },
})
