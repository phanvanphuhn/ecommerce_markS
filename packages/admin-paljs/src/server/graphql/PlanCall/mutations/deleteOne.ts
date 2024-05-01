import { mutationField, nonNull } from 'nexus'

export const PlanCallDeleteOneMutation = mutationField('deleteOnePlanCall', {
  type: 'PlanCall',
  args: {
    where: nonNull('PlanCallWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.planCall.delete({
      where,
      ...select,
    })
  },
})
