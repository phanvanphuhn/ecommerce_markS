import { queryField, list } from 'nexus'

export const CaseLogSubmissionFindFirstQuery = queryField(
  'findFirstCaseLogSubmission',
  {
    type: 'CaseLogSubmission',
    args: {
      where: 'CaseLogSubmissionWhereInput',
      orderBy: list('CaseLogSubmissionOrderByWithRelationInput'),
      cursor: 'CaseLogSubmissionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CaseLogSubmissionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.caseLogSubmission.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
