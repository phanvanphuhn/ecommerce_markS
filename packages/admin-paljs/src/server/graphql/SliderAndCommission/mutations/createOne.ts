import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionCreateOneMutation = mutationField(
  'createOneSliderAndCommission',
  {
    type: nonNull('SliderAndCommission'),
    args: {
      data: 'SliderAndCommissionCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.sliderAndCommission.create({
        data,
        ...select,
      })
    },
  },
)
