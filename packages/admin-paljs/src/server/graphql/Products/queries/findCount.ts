import { queryField, nonNull, list } from 'nexus'

export const ProductsFindCountQuery = queryField('findManyProductsCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProductsWhereInput',
    orderBy: list('ProductsOrderByWithRelationInput'),
    cursor: 'ProductsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.products.count(args as any)
  },
})
