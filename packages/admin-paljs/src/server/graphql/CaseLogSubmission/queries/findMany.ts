import { queryField, nonNull, list } from 'nexus'

export const CaseLogSubmissionFindManyQuery = queryField('findManyCaseLogSubmission', {
  type: nonNull(list(nonNull('CaseLogSubmission'))),
  args: {
    where: 'CaseLogSubmissionWhereInput',
    orderBy: list('CaseLogSubmissionOrderByWithRelationInput'),
    cursor: 'CaseLogSubmissionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseLogSubmissionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLogSubmission.findMany({
      ...args,
      ...select,
    })
  },
})
