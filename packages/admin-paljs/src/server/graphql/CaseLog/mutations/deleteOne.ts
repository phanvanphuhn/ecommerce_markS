import { mutationField, nonNull } from 'nexus'

export const CaseLogDeleteOneMutation = mutationField('deleteOneCaseLog', {
  type: 'CaseLog',
  args: {
    where: nonNull('CaseLogWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.caseLog.delete({
      where,
      ...select,
    })
  },
})
