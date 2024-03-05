import { mutationField, nonNull } from 'nexus'

export const ProductsDeleteOneMutation = mutationField('deleteOneProducts', {
  type: 'Products',
  args: {
    where: nonNull('ProductsWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.products.delete({
      where,
      ...select,
    })
  },
})
