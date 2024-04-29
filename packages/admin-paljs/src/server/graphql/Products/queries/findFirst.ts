import { queryField, list } from 'nexus'

export const ProductsFindFirstQuery = queryField('findFirstProducts', {
  type: 'Products',
  args: {
    where: 'ProductsWhereInput',
    orderBy: list('ProductsOrderByWithRelationInput'),
    cursor: 'ProductsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.products.findFirst({
      ...args,
      ...select,
    })
  },
})
