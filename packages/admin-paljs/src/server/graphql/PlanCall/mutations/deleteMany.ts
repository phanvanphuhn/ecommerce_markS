import { mutationField, nonNull } from 'nexus'

export const PlanCallDeleteManyMutation = mutationField('deleteManyPlanCall', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PlanCallWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.planCall.deleteMany({ where } as any)
  },
})
