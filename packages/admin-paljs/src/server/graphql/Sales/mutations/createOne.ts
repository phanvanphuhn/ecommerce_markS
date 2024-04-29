import { mutationField, nonNull } from 'nexus'

export const SalesCreateOneMutation = mutationField('createOneSales', {
  type: nonNull('Sales'),
  args: {
    data: 'SalesCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.sales.create({
      data,
      ...select,
    })
  },
})
