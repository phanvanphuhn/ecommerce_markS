import { mutationField, nonNull } from 'nexus'

export const PlanCallUpsertOneMutation = mutationField('upsertOnePlanCall', {
  type: nonNull('PlanCall'),
  args: {
    where: nonNull('PlanCallWhereUniqueInput'),
    create: nonNull('PlanCallCreateInput'),
    update: nonNull('PlanCallUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.planCall.upsert({
      ...args,
      ...select,
    })
  },
})
