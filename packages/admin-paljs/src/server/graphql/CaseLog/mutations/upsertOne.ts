import { mutationField, nonNull } from 'nexus'

export const CaseLogUpsertOneMutation = mutationField('upsertOneCaseLog', {
  type: nonNull('CaseLog'),
  args: {
    where: nonNull('CaseLogWhereUniqueInput'),
    create: nonNull('CaseLogCreateInput'),
    update: nonNull('CaseLogUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLog.upsert({
      ...args,
      ...select,
    })
  },
})
