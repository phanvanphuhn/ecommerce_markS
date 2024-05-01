import { mutationField, nonNull } from 'nexus'

export const CaseLogUpdateManyMutation = mutationField('updateManyCaseLog', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CaseLogUpdateManyMutationInput'),
    where: 'CaseLogWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.caseLog.updateMany(args as any)
  },
})
