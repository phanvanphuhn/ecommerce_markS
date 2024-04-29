import { mutationField, nonNull } from 'nexus'

export const CaseLogCreateOneMutation = mutationField('createOneCaseLog', {
  type: nonNull('CaseLog'),
  args: {
    data: 'CaseLogCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.caseLog.create({
      data,
      ...select,
    })
  },
})
