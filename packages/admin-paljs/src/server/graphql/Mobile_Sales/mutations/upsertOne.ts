import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesUpsertOneMutation = mutationField('upsertOneMobile_Sales', {
  type: nonNull('Mobile_Sales'),
  args: {
    where: nonNull('Mobile_SalesWhereUniqueInput'),
    create: nonNull('Mobile_SalesCreateInput'),
    update: nonNull('Mobile_SalesUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.mobile_Sales.upsert({
      ...args,
      ...select,
    })
  },
})
