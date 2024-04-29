import { queryField, nonNull, list } from 'nexus'

export const CaseLogFindCountQuery = queryField('findManyCaseLogCount', {
  type: nonNull('Int'),
  args: {
    where: 'CaseLogWhereInput',
    orderBy: list('CaseLogOrderByWithRelationInput'),
    cursor: 'CaseLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseLogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.caseLog.count(args as any)
  },
})
