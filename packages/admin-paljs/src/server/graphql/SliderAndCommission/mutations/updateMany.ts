import { mutationField, nonNull } from 'nexus'

export const SliderAndCommissionUpdateManyMutation = mutationField(
  'updateManySliderAndCommission',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('SliderAndCommissionUpdateManyMutationInput'),
      where: 'SliderAndCommissionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.sliderAndCommission.updateMany(args as any)
    },
  },
)
