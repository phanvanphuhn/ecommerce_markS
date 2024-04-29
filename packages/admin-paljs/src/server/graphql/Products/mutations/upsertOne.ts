import { mutationField, nonNull } from 'nexus'

export const ProductsUpsertOneMutation = mutationField('upsertOneProducts', {
  type: nonNull('Products'),
  args: {
    where: nonNull('ProductsWhereUniqueInput'),
    create: nonNull('ProductsCreateInput'),
    update: nonNull('ProductsUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.products.upsert({
      ...args,
      ...select,
    })
  },
})
