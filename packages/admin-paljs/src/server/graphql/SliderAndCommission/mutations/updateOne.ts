import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionUpdateOneMutation = mutationField('updateOneSliderAndCommission', {
  type: nonNull('SliderAndCommission'),
  args: {
    data: nonNull('SliderAndCommissionUpdateInput'),
    where: nonNull('SliderAndCommissionWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.sliderAndCommission.update({
      where,
      data,
      ...select,
    })
  },
})
