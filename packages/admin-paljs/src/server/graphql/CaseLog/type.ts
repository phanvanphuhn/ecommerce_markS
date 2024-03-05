import { objectType, list } from 'nexus'

export const CaseLog = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CaseLog',
  definition(t) {
    t.string('id')
    t.nullable.string('caseName')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.string('account')
    t.nullable.string('location')
    t.nullable.string('contact')
    t.nullable.string('secondaryContact')
    t.nullable.string('activityOwnerName')
    t.nullable.string('activityOwnerEmail')
    t.nullable.string('status')
    t.list.string('photoPaths')
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
      type: 'CaseLogCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
