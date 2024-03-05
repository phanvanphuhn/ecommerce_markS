import { queryField, nonNull } from 'nexus'

export const CaseLogSubmissionFindUniqueQuery = queryField(
  'findUniqueCaseLogSubmission',
  {
    type: 'CaseLogSubmission',
    args: {
      where: nonNull('CaseLogSubmissionWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.caseLogSubmission.findUnique({
        where,
        ...select,
      })
    },
  },
)
