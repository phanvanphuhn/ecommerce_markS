import { queryField, list } from 'nexus'

export const CaseLogSubmissionAggregateQuery = queryField('aggregateCaseLogSubmission', {
  type: 'AggregateCaseLogSubmission',
  args: {
    where: 'CaseLogSubmissionWhereInput',
    orderBy: list('CaseLogSubmissionOrderByWithRelationInput'),
    cursor: 'CaseLogSubmissionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLogSubmission.aggregate({ ...args, ...select }) as any
  },
})
