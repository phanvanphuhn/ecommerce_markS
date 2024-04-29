import { mutationField, nonNull } from 'nexus'

export const CaseLogDeleteManyMutation = mutationField('deleteManyCaseLog', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CaseLogWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.caseLog.deleteMany({ where } as any)
  },
})
