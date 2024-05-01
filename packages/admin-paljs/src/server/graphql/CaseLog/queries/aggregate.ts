import { queryField, list } from 'nexus'

export const CaseLogAggregateQuery = queryField('aggregateCaseLog', {
  type: 'AggregateCaseLog',
  args: {
    where: 'CaseLogWhereInput',
    orderBy: list('CaseLogOrderByWithRelationInput'),
    cursor: 'CaseLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLog.aggregate({ ...args, ...select }) as any
  },
})
