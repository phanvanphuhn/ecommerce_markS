import { queryField, nonNull, list } from 'nexus'

export const PlanCallFindCountQuery = queryField('findManyPlanCallCount', {
  type: nonNull('Int'),
  args: {
    where: 'PlanCallWhereInput',
    orderBy: list('PlanCallOrderByWithRelationInput'),
    cursor: 'PlanCallWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PlanCallScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.planCall.count(args as any)
  },
})
