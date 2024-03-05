import { queryField, nonNull, list } from 'nexus'

export const CaseLogSubmissionFindCountQuery = queryField(
  'findManyCaseLogSubmissionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CaseLogSubmissionWhereInput',
      orderBy: list('CaseLogSubmissionOrderByWithRelationInput'),
      cursor: 'CaseLogSubmissionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CaseLogSubmissionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.caseLogSubmission.count(args as any)
    },
  },
)
