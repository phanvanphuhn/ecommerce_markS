import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesUpdateOneMutation = mutationField('updateOneMobile_Sales', {
  type: nonNull('Mobile_Sales'),
  args: {
    data: nonNull('Mobile_SalesUpdateInput'),
    where: nonNull('Mobile_SalesWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.mobile_Sales.update({
      where,
      data,
      ...select,
    })
  },
})
