import { queryField, nonNull } from 'nexus'

export const CaseLogFindUniqueQuery = queryField('findUniqueCaseLog', {
  type: 'CaseLog',
  args: {
    where: nonNull('CaseLogWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.caseLog.findUnique({
      where,
      ...select,
    })
  },
})
