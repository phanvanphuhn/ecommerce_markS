import { queryField, nonNull, list } from 'nexus'

export const SliderAndCommissionFindCountQuery = queryField(
  'findManySliderAndCommissionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'SliderAndCommissionWhereInput',
      orderBy: list('SliderAndCommissionOrderByWithRelationInput'),
      cursor: 'SliderAndCommissionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SliderAndCommissionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.sliderAndCommission.count(args as any)
    },
  },
)
