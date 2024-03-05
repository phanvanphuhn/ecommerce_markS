import { mutationField, nonNull } from 'nexus'

export const CaseLogUpdateOneMutation = mutationField('updateOneCaseLog', {
  type: nonNull('CaseLog'),
  args: {
    data: nonNull('CaseLogUpdateInput'),
    where: nonNull('CaseLogWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.caseLog.update({
      where,
      data,
      ...select,
    })
  },
})
