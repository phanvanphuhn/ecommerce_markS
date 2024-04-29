import { mutationField, nonNull } from 'nexus'

export const SalesUpsertOneMutation = mutationField('upsertOneSales', {
  type: nonNull('Sales'),
  args: {
    where: nonNull('SalesWhereUniqueInput'),
    create: nonNull('SalesCreateInput'),
    update: nonNull('SalesUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sales.upsert({
      ...args,
      ...select,
    })
  },
})
