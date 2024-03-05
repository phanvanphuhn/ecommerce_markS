import { queryField, list } from 'nexus'

export const PlanCallAggregateQuery = queryField('aggregatePlanCall', {
  type: 'AggregatePlanCall',
  args: {
    where: 'PlanCallWhereInput',
    orderBy: list('PlanCallOrderByWithRelationInput'),
    cursor: 'PlanCallWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.planCall.aggregate({ ...args, ...select }) as any
  },
})
