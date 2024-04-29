import { mutationField, nonNull } from 'nexus'

export const PlanCallUpdateOneMutation = mutationField('updateOnePlanCall', {
  type: nonNull('PlanCall'),
  args: {
    data: nonNull('PlanCallUpdateInput'),
    where: nonNull('PlanCallWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.planCall.update({
      where,
      data,
      ...select,
    })
  },
})
