import { mutationField, nonNull } from 'nexus'

export const PlanCallCreateOneMutation = mutationField('createOnePlanCall', {
  type: nonNull('PlanCall'),
  args: {
    data: 'PlanCallCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.planCall.create({
      data,
      ...select,
    })
  },
})
