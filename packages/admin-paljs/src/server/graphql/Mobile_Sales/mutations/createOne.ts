import { mutationField, nonNull } from 'nexus'

export const Mobile_SalesCreateOneMutation = mutationField('createOneMobile_Sales', {
  type: nonNull('Mobile_Sales'),
  args: {
    data: 'Mobile_SalesCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.mobile_Sales.create({
      data,
      ...select,
    })
  },
})
