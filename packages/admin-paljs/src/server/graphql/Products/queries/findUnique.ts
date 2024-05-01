import { queryField, nonNull } from 'nexus'

export const ProductsFindUniqueQuery = queryField('findUniqueProducts', {
  type: 'Products',
  args: {
    where: nonNull('ProductsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.products.findUnique({
      where,
      ...select,
    })
  },
})
