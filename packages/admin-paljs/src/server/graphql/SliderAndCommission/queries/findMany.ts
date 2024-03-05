import { queryField, nonNull, list } from 'nexus'

export const SliderAndCommissionFindManyQuery = queryField(
  'findManySliderAndCommission',
  {
    type: nonNull(list(nonNull('SliderAndCommission'))),
    args: {
      where: 'SliderAndCommissionWhereInput',
      orderBy: list('SliderAndCommissionOrderByWithRelationInput'),
      cursor: 'SliderAndCommissionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SliderAndCommissionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.sliderAndCommission.findMany({
        ...args,
        ...select,
      })
    },
  },
)
