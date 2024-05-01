import { mutationField, nonNull } from 'nexus'

export const ProductsUpdateManyMutation = mutationField('updateManyProducts', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProductsUpdateManyMutationInput'),
    where: 'ProductsWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.products.updateMany(args as any)
  },
})
