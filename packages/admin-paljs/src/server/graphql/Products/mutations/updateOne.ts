import { mutationField, nonNull } from 'nexus'

export const ProductsUpdateOneMutation = mutationField('updateOneProducts', {
  type: nonNull('Products'),
  args: {
    data: nonNull('ProductsUpdateInput'),
    where: nonNull('ProductsWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.products.update({
      where,
      data,
      ...select,
    })
  },
})
