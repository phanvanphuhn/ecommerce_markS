import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionDeleteOneMutation = mutationField(
  'deleteOneCaseLogSubmission',
  {
    type: 'CaseLogSubmission',
    args: {
      where: nonNull('CaseLogSubmissionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.caseLogSubmission.delete({
        where,
        ...select,
      })
    },
  },
)
