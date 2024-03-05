import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionUpdateOneMutation = mutationField(
  'updateOneCaseLogSubmission',
  {
    type: nonNull('CaseLogSubmission'),
    args: {
      data: nonNull('CaseLogSubmissionUpdateInput'),
      where: nonNull('CaseLogSubmissionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.caseLogSubmission.update({
        where,
        data,
        ...select,
      })
    },
  },
)
