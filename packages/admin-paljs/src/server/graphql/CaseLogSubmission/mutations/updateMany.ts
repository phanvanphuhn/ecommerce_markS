import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionUpdateManyMutation = mutationField('updateManyCaseLogSubmission', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CaseLogSubmissionUpdateManyMutationInput'),
    where: 'CaseLogSubmissionWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.caseLogSubmission.updateMany(args as any)
  },
})
