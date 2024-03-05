import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionDeleteOneMutation = mutationField('deleteOneSliderAndCommission', {
  type: 'SliderAndCommission',
  args: {
    where: nonNull('SliderAndCommissionWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.sliderAndCommission.delete({
      where,
      ...select,
    })
  },
})
