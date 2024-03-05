import { objectType, list } from 'nexus'

export const Products = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Products',
  definition(t) {
    t.string('id')
    t.nullable.string('upn')
    t.nullable.string('gtin')
    t.nullable.string('upnDescription')
    t.nullable.string('country')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.list.field('caseLogSubmission', {
      type: 'CaseLogSubmission',
      args: {
        where: 'CaseLogSubmissionWhereInput',
        orderBy: list('CaseLogSubmissionOrderByWithRelationInput'),
        cursor: 'CaseLogSubmissionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CaseLogSubmissionScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.caseLogSubmission
      },
    })
    t.field('_count', {
      type: 'ProductsCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
