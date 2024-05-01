import { queryField, nonNull, list } from 'nexus'

export const PlanCallFindManyQuery = queryField('findManyPlanCall', {
  type: nonNull(list(nonNull('PlanCall'))),
  args: {
    where: 'PlanCallWhereInput',
    orderBy: list('PlanCallOrderByWithRelationInput'),
    cursor: 'PlanCallWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PlanCallScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.planCall.findMany({
      ...args,
      ...select,
    })
  },
})
