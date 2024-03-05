import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionDeleteManyMutation = mutationField('deleteManyCaseLogSubmission', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CaseLogSubmissionWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.caseLogSubmission.deleteMany({ where } as any)
  },
})
