import { objectType } from 'nexus'

export const CaseLogSubmission = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CaseLogSubmission',
  definition(t) {
    t.string('id')
    t.nullable.string('quantity')
    t.nullable.string('salesRepEmail')
    t.nullable.string('caseLogId')
    t.nullable.string('productId')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('caseLog', {
      type: 'CaseLog',
      args: {
        where: 'CaseLogWhereInput',
      },
      resolve(root: any) {
        return root.caseLog
      },
    })
    t.nullable.field('product', {
      type: 'Products',
      args: {
        where: 'ProductsWhereInput',
      },
      resolve(root: any) {
        return root.product
      },
    })
  },
})
