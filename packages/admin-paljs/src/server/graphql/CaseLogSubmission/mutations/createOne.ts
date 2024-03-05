import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionCreateOneMutation = mutationField(
  'createOneCaseLogSubmission',
  {
    type: nonNull('CaseLogSubmission'),
    args: {
      data: 'CaseLogSubmissionCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.caseLogSubmission.create({
        data,
        ...select,
      })
    },
  },
)
