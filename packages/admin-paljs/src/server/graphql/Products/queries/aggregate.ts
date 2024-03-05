import { queryField, list } from 'nexus'

export const ProductsAggregateQuery = queryField('aggregateProducts', {
  type: 'AggregateProducts',
  args: {
    where: 'ProductsWhereInput',
    orderBy: list('ProductsOrderByWithRelationInput'),
    cursor: 'ProductsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.products.aggregate({ ...args, ...select }) as any
  },
})
