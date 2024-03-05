import { mutationField, nonNull } from 'nexus'

export const CaseLogSubmissionUpsertOneMutation = mutationField('upsertOneCaseLogSubmission', {
  type: nonNull('CaseLogSubmission'),
  args: {
    where: nonNull('CaseLogSubmissionWhereUniqueInput'),
    create: nonNull('CaseLogSubmissionCreateInput'),
    update: nonNull('CaseLogSubmissionUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.caseLogSubmission.upsert({
      ...args,
      ...select,
    })
  },
})
