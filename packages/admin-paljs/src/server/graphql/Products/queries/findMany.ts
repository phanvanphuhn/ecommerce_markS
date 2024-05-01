import { queryField, nonNull, list } from 'nexus'

export const ProductsFindManyQuery = queryField('findManyProducts', {
  type: nonNull(list(nonNull('Products'))),
  args: {
    where: 'ProductsWhereInput',
    orderBy: list('ProductsOrderByWithRelationInput'),
    cursor: 'ProductsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.products.findMany({
      ...args,
      ...select,
    })
  },
})
