import { mutationField, nonNull } from 'nexus'

export const ProductsCreateOneMutation = mutationField('createOneProducts', {
  type: nonNull('Products'),
  args: {
    data: 'ProductsCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.products.create({
      data,
      ...select,
    })
  },
})
