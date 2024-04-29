import { queryField, nonNull, list } from 'nexus'

export const CaseLogFindManyQuery = queryField('findManyCaseLog', {
  type: nonNull(list(nonNull('CaseLog'))),
  args: {
    where: 'CaseLogWhereInput',
    orderBy: list('CaseLogOrderByWithRelationInput'),
    cursor: 'CaseLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseLogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLog.findMany({
      ...args,
      ...select,
    })
  },
})
