import { queryField, list } from 'nexus'

export const PlanCallFindFirstQuery = queryField('findFirstPlanCall', {
  type: 'PlanCall',
  args: {
    where: 'PlanCallWhereInput',
    orderBy: list('PlanCallOrderByWithRelationInput'),
    cursor: 'PlanCallWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PlanCallScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.planCall.findFirst({
      ...args,
      ...select,
    })
  },
})
