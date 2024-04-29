import { mutationField, nonNull } from 'nexus'

export const ProductsDeleteManyMutation = mutationField('deleteManyProducts', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProductsWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.products.deleteMany({ where } as any)
  },
})
