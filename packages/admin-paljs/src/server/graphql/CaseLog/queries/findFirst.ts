import { queryField, list } from 'nexus'

export const CaseLogFindFirstQuery = queryField('findFirstCaseLog', {
  type: 'CaseLog',
  args: {
    where: 'CaseLogWhereInput',
    orderBy: list('CaseLogOrderByWithRelationInput'),
    cursor: 'CaseLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseLogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLog.findFirst({
      ...args,
      ...select,
    })
  },
})
