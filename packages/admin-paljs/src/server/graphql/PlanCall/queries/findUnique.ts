import { queryField, nonNull } from 'nexus'

export const PlanCallFindUniqueQuery = queryField('findUniquePlanCall', {
  type: 'PlanCall',
  args: {
    where: nonNull('PlanCallWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.planCall.findUnique({
      where,
      ...select,
    })
  },
})
