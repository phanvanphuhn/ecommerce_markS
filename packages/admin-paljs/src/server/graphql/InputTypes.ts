import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: ['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'],
})

export const ContactSearchScalarFieldEnum = enumType({
  name: 'ContactSearchScalarFieldEnum',
  members: [
    'id',
    'salesRepEmail',
    'hospital',
    'topicsOfInterest',
    'contactId',
    'doctorName',
    'doctorEmail',
    'doctorAlternativeEmail',
    'doctorDivision',
    'doctorProfilePhoto',
    'doctorSpecialty',
    'doctorSalutation',
    'doctorTitle',
    'doctorPhone',
    'doctorCountry',
    'createdAt',
    'updatedAt',
  ],
})

export const ComplaintScalarFieldEnum = enumType({
  name: 'ComplaintScalarFieldEnum',
  members: [
    'id',
    'complaintId',
    'salesRepEmail',
    'complaintName',
    'complaintStatus',
    'eventDate',
    'createdDate',
    'complaintTitle',
    'division',
    'country',
    'awareDate',
    'timeOfEvent',
    'typeOfSituationReporting',
    'accName',
    'procedureType',
    'procedureDate',
    'treatedFor',
    'procedureOutcome',
    'reasonsForUnsuccessfulProcedure',
  ],
})

export const UserProfileScalarFieldEnum = enumType({
  name: 'UserProfileScalarFieldEnum',
  members: ['id', 'salesRepEmail', 'fullName', 'country', 'division', 'reportingTo', 'networkId', 'personId', 'title'],
})

export const SliderAndCommissionScalarFieldEnum = enumType({
  name: 'SliderAndCommissionScalarFieldEnum',
  members: [
    'id',
    'lowerBound',
    'upperBound',
    'variablePayoutPercentage',
    'territoryCategory',
    'commissionPercentage',
    'year',
  ],
})

export const TerritoryCategorizationScalarFieldEnum = enumType({
  name: 'TerritoryCategorizationScalarFieldEnum',
  members: ['id', 'lowerBound', 'upperBound', 'territoryCategory', 'year'],
})

export const LeaderboardScalarFieldEnum = enumType({
  name: 'LeaderboardScalarFieldEnum',
  members: [
    'id',
    'salesRepEmail',
    'fullName',
    'country',
    'year',
    'quarter',
    'month',
    'targetAchievedYtd',
    'rankYtd',
    'targetAchievedQtd',
    'rankQtd',
    'targetAchievedMtd',
    'rankMtd',
    'lastRefreshedTimestamp',
  ],
})

export const SalesScalarFieldEnum = enumType({
  name: 'SalesScalarFieldEnum',
  members: [
    'id',
    'salesRepEmail',
    'sipEligibility',
    'currency',
    'year',
    'quarter',
    'month',
    'productType',
    'newHire',
    'guaranttedPayout',
    'mixedBag',
    'variablePayByMonth',
    'variablePayByYear',
    'variablePayByQuarter',
    'variablePayQ5',
    'salesByMonth',
    'salesByYear',
    'salesByQuarter',
    'targetByMonth',
    'targetByYear',
    'targetByQuarter',
    'salesAchievementPercentageByMonth',
    'salesAchievementPercentageByYear',
    'salesAchievementPercentageByQuarter',
    'variablePayoutPercentageByQuarter',
    'variablePayoutPercentageByYear',
    'targetByYearUSD',
    'territoryCategory',
    'commissionPercentageByQuarter',
    'commissionPayoutByQuarter',
    'variablePayoutByQuarter',
    'additionalPayout',
    'kicker',
    'earlyBirdEligibility',
    'earlyBird',
    'variablePayoutPercentageQ5',
    'variablePayoutQ5',
    'commissionPercentageQ5',
    'commissionPayoutQ5',
    'salesByMonth_forNewHire',
    'salesByYear_forNewHire',
    'salesByQuarter_forNewHire',
    'salesAchivementPercentageByQuarter_forNewHire',
    'salesAchievementPercentageByYear_forNewHire',
    'variablePayoutPercentageByQuarter_forNewHire',
    'variablePayoutPercentageQ5_forNewHire',
    'commissionPercentageByQuarter_forNewHire',
    'commissionPercentageQ5_forNewHire',
    'variablePayoutByQuarter_forNewHire',
    'variablePayoutQ5_forNewHire',
    'commissionPayoutByQuarter_forNewHire',
    'commissionPayoutQ5_forNewHire',
    'additionalPayoutCE',
    'additionalPayoutSC',
    'createdAt',
    'updatedAt',
  ],
})

export const Mobile_SalesScalarFieldEnum = enumType({
  name: 'Mobile_SalesScalarFieldEnum',
  members: ['id', 'salesRepEmail', 'targetByQuarter', 'targetByYear', 'quarter', 'year', 'type'],
})

export const PlanCallScalarFieldEnum = enumType({
  name: 'PlanCallScalarFieldEnum',
  members: [
    'uniqueIdInApp',
    'salesForceId',
    'subject',
    'startDate',
    'endDate',
    'description',
    'location',
    'account',
    'contactId',
    'contactName',
    'division',
    'activityType',
    'activitySubtype',
    'activityOwnerName',
    'activityOwnerEmail',
    'ownerCountry',
    'status',
    'createdInApp',
    'lastModifiedInApp',
  ],
})

export const CaseLogScalarFieldEnum = enumType({
  name: 'CaseLogScalarFieldEnum',
  members: [
    'id',
    'caseName',
    'startDate',
    'endDate',
    'account',
    'location',
    'contact',
    'secondaryContact',
    'activityOwnerName',
    'activityOwnerEmail',
    'status',
    'photoPaths',
    'createdAt',
    'updatedAt',
  ],
})

export const CaseLogSubmissionScalarFieldEnum = enumType({
  name: 'CaseLogSubmissionScalarFieldEnum',
  members: ['id', 'quantity', 'salesRepEmail', 'caseLogId', 'productId', 'createdAt', 'updatedAt'],
})

export const SearchHistoryScalarFieldEnum = enumType({
  name: 'SearchHistoryScalarFieldEnum',
  members: ['id', 'salesRepEmail', 'searchQuery', 'searchType', 'searchResults', 'createdAt', 'updatedAt'],
})

export const ProductsScalarFieldEnum = enumType({
  name: 'ProductsScalarFieldEnum',
  members: ['id', 'upn', 'gtin', 'upnDescription', 'country', 'createdAt', 'updatedAt'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const mobileSalesTargetType = enumType({
  name: 'mobileSalesTargetType',
  members: ['year', 'quarter'],
})

export const SearchType = enumType({
  name: 'SearchType',
  members: ['CaseLog', 'PlanCall', 'ContactSearch'],
})

export const ContactSearchWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ContactSearchWhereInput' })
    t.list.field('OR', { type: 'ContactSearchWhereInput' })
    t.list.field('NOT', { type: 'ContactSearchWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('hospital', { type: 'StringNullableFilter' })
    t.field('topicsOfInterest', { type: 'StringNullableFilter' })
    t.field('contactId', { type: 'StringNullableFilter' })
    t.field('doctorName', { type: 'StringNullableFilter' })
    t.field('doctorEmail', { type: 'StringNullableFilter' })
    t.field('doctorAlternativeEmail', { type: 'StringNullableFilter' })
    t.field('doctorDivision', { type: 'StringNullableFilter' })
    t.field('doctorProfilePhoto', { type: 'StringNullableFilter' })
    t.field('doctorSpecialty', { type: 'StringNullableFilter' })
    t.field('doctorSalutation', { type: 'StringNullableFilter' })
    t.field('doctorTitle', { type: 'StringNullableFilter' })
    t.field('doctorPhone', { type: 'StringNullableFilter' })
    t.field('doctorCountry', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const ContactSearchOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('hospital', { type: 'SortOrderInput' })
    t.field('topicsOfInterest', { type: 'SortOrderInput' })
    t.field('contactId', { type: 'SortOrderInput' })
    t.field('doctorName', { type: 'SortOrderInput' })
    t.field('doctorEmail', { type: 'SortOrderInput' })
    t.field('doctorAlternativeEmail', { type: 'SortOrderInput' })
    t.field('doctorDivision', { type: 'SortOrderInput' })
    t.field('doctorProfilePhoto', { type: 'SortOrderInput' })
    t.field('doctorSpecialty', { type: 'SortOrderInput' })
    t.field('doctorSalutation', { type: 'SortOrderInput' })
    t.field('doctorTitle', { type: 'SortOrderInput' })
    t.field('doctorPhone', { type: 'SortOrderInput' })
    t.field('doctorCountry', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
  },
})

export const ContactSearchWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ContactSearchWhereInput' })
    t.list.field('OR', { type: 'ContactSearchWhereInput' })
    t.list.field('NOT', { type: 'ContactSearchWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('hospital', { type: 'StringNullableFilter' })
    t.field('topicsOfInterest', { type: 'StringNullableFilter' })
    t.field('contactId', { type: 'StringNullableFilter' })
    t.field('doctorName', { type: 'StringNullableFilter' })
    t.field('doctorEmail', { type: 'StringNullableFilter' })
    t.field('doctorAlternativeEmail', { type: 'StringNullableFilter' })
    t.field('doctorDivision', { type: 'StringNullableFilter' })
    t.field('doctorProfilePhoto', { type: 'StringNullableFilter' })
    t.field('doctorSpecialty', { type: 'StringNullableFilter' })
    t.field('doctorSalutation', { type: 'StringNullableFilter' })
    t.field('doctorTitle', { type: 'StringNullableFilter' })
    t.field('doctorPhone', { type: 'StringNullableFilter' })
    t.field('doctorCountry', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const ContactSearchOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('hospital', { type: 'SortOrderInput' })
    t.field('topicsOfInterest', { type: 'SortOrderInput' })
    t.field('contactId', { type: 'SortOrderInput' })
    t.field('doctorName', { type: 'SortOrderInput' })
    t.field('doctorEmail', { type: 'SortOrderInput' })
    t.field('doctorAlternativeEmail', { type: 'SortOrderInput' })
    t.field('doctorDivision', { type: 'SortOrderInput' })
    t.field('doctorProfilePhoto', { type: 'SortOrderInput' })
    t.field('doctorSpecialty', { type: 'SortOrderInput' })
    t.field('doctorSalutation', { type: 'SortOrderInput' })
    t.field('doctorTitle', { type: 'SortOrderInput' })
    t.field('doctorPhone', { type: 'SortOrderInput' })
    t.field('doctorCountry', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'ContactSearchCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ContactSearchAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ContactSearchMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ContactSearchMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ContactSearchSumOrderByAggregateInput' })
  },
})

export const ContactSearchScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ContactSearchScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ContactSearchScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ContactSearchScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('hospital', { type: 'StringNullableWithAggregatesFilter' })
    t.field('topicsOfInterest', { type: 'StringNullableWithAggregatesFilter' })
    t.field('contactId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorAlternativeEmail', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('doctorDivision', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorProfilePhoto', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('doctorSpecialty', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorSalutation', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorTitle', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorPhone', { type: 'StringNullableWithAggregatesFilter' })
    t.field('doctorCountry', { type: 'StringNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const ComplaintWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ComplaintWhereInput' })
    t.list.field('OR', { type: 'ComplaintWhereInput' })
    t.list.field('NOT', { type: 'ComplaintWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('complaintId', { type: 'StringNullableFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('complaintName', { type: 'StringNullableFilter' })
    t.field('complaintStatus', { type: 'StringNullableFilter' })
    t.field('eventDate', { type: 'DateTimeNullableFilter' })
    t.field('createdDate', { type: 'DateTimeNullableFilter' })
    t.field('complaintTitle', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('awareDate', { type: 'DateTimeNullableFilter' })
    t.field('timeOfEvent', { type: 'StringNullableFilter' })
    t.field('typeOfSituationReporting', { type: 'StringNullableFilter' })
    t.field('accName', { type: 'StringNullableFilter' })
    t.field('procedureType', { type: 'StringNullableFilter' })
    t.field('procedureDate', { type: 'DateTimeNullableFilter' })
    t.field('treatedFor', { type: 'StringNullableFilter' })
    t.field('procedureOutcome', { type: 'StringNullableFilter' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'StringNullableFilter' })
  },
})

export const ComplaintOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('complaintId', { type: 'SortOrderInput' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('complaintName', { type: 'SortOrderInput' })
    t.field('complaintStatus', { type: 'SortOrderInput' })
    t.field('eventDate', { type: 'SortOrderInput' })
    t.field('createdDate', { type: 'SortOrderInput' })
    t.field('complaintTitle', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('awareDate', { type: 'SortOrderInput' })
    t.field('timeOfEvent', { type: 'SortOrderInput' })
    t.field('typeOfSituationReporting', { type: 'SortOrderInput' })
    t.field('accName', { type: 'SortOrderInput' })
    t.field('procedureType', { type: 'SortOrderInput' })
    t.field('procedureDate', { type: 'SortOrderInput' })
    t.field('treatedFor', { type: 'SortOrderInput' })
    t.field('procedureOutcome', { type: 'SortOrderInput' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'SortOrderInput' })
  },
})

export const ComplaintWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'ComplaintWhereInput' })
    t.list.field('OR', { type: 'ComplaintWhereInput' })
    t.list.field('NOT', { type: 'ComplaintWhereInput' })
    t.field('complaintId', { type: 'StringNullableFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('complaintName', { type: 'StringNullableFilter' })
    t.field('complaintStatus', { type: 'StringNullableFilter' })
    t.field('eventDate', { type: 'DateTimeNullableFilter' })
    t.field('createdDate', { type: 'DateTimeNullableFilter' })
    t.field('complaintTitle', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('awareDate', { type: 'DateTimeNullableFilter' })
    t.field('timeOfEvent', { type: 'StringNullableFilter' })
    t.field('typeOfSituationReporting', { type: 'StringNullableFilter' })
    t.field('accName', { type: 'StringNullableFilter' })
    t.field('procedureType', { type: 'StringNullableFilter' })
    t.field('procedureDate', { type: 'DateTimeNullableFilter' })
    t.field('treatedFor', { type: 'StringNullableFilter' })
    t.field('procedureOutcome', { type: 'StringNullableFilter' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'StringNullableFilter' })
  },
})

export const ComplaintOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('complaintId', { type: 'SortOrderInput' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('complaintName', { type: 'SortOrderInput' })
    t.field('complaintStatus', { type: 'SortOrderInput' })
    t.field('eventDate', { type: 'SortOrderInput' })
    t.field('createdDate', { type: 'SortOrderInput' })
    t.field('complaintTitle', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('awareDate', { type: 'SortOrderInput' })
    t.field('timeOfEvent', { type: 'SortOrderInput' })
    t.field('typeOfSituationReporting', { type: 'SortOrderInput' })
    t.field('accName', { type: 'SortOrderInput' })
    t.field('procedureType', { type: 'SortOrderInput' })
    t.field('procedureDate', { type: 'SortOrderInput' })
    t.field('treatedFor', { type: 'SortOrderInput' })
    t.field('procedureOutcome', { type: 'SortOrderInput' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'SortOrderInput' })
    t.field('_count', { type: 'ComplaintCountOrderByAggregateInput' })
    t.field('_max', { type: 'ComplaintMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ComplaintMinOrderByAggregateInput' })
  },
})

export const ComplaintScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ComplaintScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ComplaintScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ComplaintScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('complaintId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('complaintName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('complaintStatus', { type: 'StringNullableWithAggregatesFilter' })
    t.field('eventDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('createdDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('complaintTitle', { type: 'StringNullableWithAggregatesFilter' })
    t.field('division', { type: 'StringNullableWithAggregatesFilter' })
    t.field('country', { type: 'StringNullableWithAggregatesFilter' })
    t.field('awareDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('timeOfEvent', { type: 'StringNullableWithAggregatesFilter' })
    t.field('typeOfSituationReporting', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('accName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('procedureType', { type: 'StringNullableWithAggregatesFilter' })
    t.field('procedureDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('treatedFor', { type: 'StringNullableWithAggregatesFilter' })
    t.field('procedureOutcome', { type: 'StringNullableWithAggregatesFilter' })
    t.field('reasonsForUnsuccessfulProcedure', {
      type: 'StringNullableWithAggregatesFilter',
    })
  },
})

export const UserProfileWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserProfileWhereInput' })
    t.list.field('OR', { type: 'UserProfileWhereInput' })
    t.list.field('NOT', { type: 'UserProfileWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('fullName', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('reportingTo', { type: 'StringNullableFilter' })
    t.field('networkId', { type: 'StringNullableFilter' })
    t.field('personId', { type: 'StringNullableFilter' })
    t.field('title', { type: 'StringNullableFilter' })
  },
})

export const UserProfileOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('fullName', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('reportingTo', { type: 'SortOrderInput' })
    t.field('networkId', { type: 'SortOrderInput' })
    t.field('personId', { type: 'SortOrderInput' })
    t.field('title', { type: 'SortOrderInput' })
  },
})

export const UserProfileWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'UserProfileWhereInput' })
    t.list.field('OR', { type: 'UserProfileWhereInput' })
    t.list.field('NOT', { type: 'UserProfileWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('fullName', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('reportingTo', { type: 'StringNullableFilter' })
    t.field('networkId', { type: 'StringNullableFilter' })
    t.field('personId', { type: 'StringNullableFilter' })
    t.field('title', { type: 'StringNullableFilter' })
  },
})

export const UserProfileOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('fullName', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('reportingTo', { type: 'SortOrderInput' })
    t.field('networkId', { type: 'SortOrderInput' })
    t.field('personId', { type: 'SortOrderInput' })
    t.field('title', { type: 'SortOrderInput' })
    t.field('_count', { type: 'UserProfileCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserProfileAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserProfileMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserProfileMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserProfileSumOrderByAggregateInput' })
  },
})

export const UserProfileScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserProfileScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserProfileScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserProfileScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('fullName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('country', { type: 'StringNullableWithAggregatesFilter' })
    t.field('division', { type: 'StringNullableWithAggregatesFilter' })
    t.field('reportingTo', { type: 'StringNullableWithAggregatesFilter' })
    t.field('networkId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('personId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('title', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const SliderAndCommissionWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'SliderAndCommissionWhereInput' })
    t.list.field('OR', { type: 'SliderAndCommissionWhereInput' })
    t.list.field('NOT', { type: 'SliderAndCommissionWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('lowerBound', { type: 'StringNullableFilter' })
    t.field('upperBound', { type: 'StringNullableFilter' })
    t.field('variablePayoutPercentage', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('commissionPercentage', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
  },
})

export const SliderAndCommissionOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrderInput' })
    t.field('upperBound', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentage', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('commissionPercentage', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
  },
})

export const SliderAndCommissionWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'SliderAndCommissionWhereInput' })
    t.list.field('OR', { type: 'SliderAndCommissionWhereInput' })
    t.list.field('NOT', { type: 'SliderAndCommissionWhereInput' })
    t.field('lowerBound', { type: 'StringNullableFilter' })
    t.field('upperBound', { type: 'StringNullableFilter' })
    t.field('variablePayoutPercentage', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('commissionPercentage', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
  },
})

export const SliderAndCommissionOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrderInput' })
    t.field('upperBound', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentage', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('commissionPercentage', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('_count', { type: 'SliderAndCommissionCountOrderByAggregateInput' })
    t.field('_avg', { type: 'SliderAndCommissionAvgOrderByAggregateInput' })
    t.field('_max', { type: 'SliderAndCommissionMaxOrderByAggregateInput' })
    t.field('_min', { type: 'SliderAndCommissionMinOrderByAggregateInput' })
    t.field('_sum', { type: 'SliderAndCommissionSumOrderByAggregateInput' })
  },
})

export const SliderAndCommissionScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'SliderAndCommissionScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'SliderAndCommissionScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'SliderAndCommissionScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('lowerBound', { type: 'StringNullableWithAggregatesFilter' })
    t.field('upperBound', { type: 'StringNullableWithAggregatesFilter' })
    t.field('variablePayoutPercentage', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('territoryCategory', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPercentage', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('year', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const TerritoryCategorizationWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TerritoryCategorizationWhereInput' })
    t.list.field('OR', { type: 'TerritoryCategorizationWhereInput' })
    t.list.field('NOT', { type: 'TerritoryCategorizationWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('lowerBound', { type: 'StringNullableFilter' })
    t.field('upperBound', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
  },
})

export const TerritoryCategorizationOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrderInput' })
    t.field('upperBound', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
  },
})

export const TerritoryCategorizationWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'TerritoryCategorizationWhereInput' })
    t.list.field('OR', { type: 'TerritoryCategorizationWhereInput' })
    t.list.field('NOT', { type: 'TerritoryCategorizationWhereInput' })
    t.field('lowerBound', { type: 'StringNullableFilter' })
    t.field('upperBound', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
  },
})

export const TerritoryCategorizationOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrderInput' })
    t.field('upperBound', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('_count', {
      type: 'TerritoryCategorizationCountOrderByAggregateInput',
    })
    t.field('_avg', {
      type: 'TerritoryCategorizationAvgOrderByAggregateInput',
    })
    t.field('_max', {
      type: 'TerritoryCategorizationMaxOrderByAggregateInput',
    })
    t.field('_min', {
      type: 'TerritoryCategorizationMinOrderByAggregateInput',
    })
    t.field('_sum', {
      type: 'TerritoryCategorizationSumOrderByAggregateInput',
    })
  },
})

export const TerritoryCategorizationScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'TerritoryCategorizationScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'TerritoryCategorizationScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'TerritoryCategorizationScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('lowerBound', { type: 'StringNullableWithAggregatesFilter' })
    t.field('upperBound', { type: 'StringNullableWithAggregatesFilter' })
    t.field('territoryCategory', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('year', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const LeaderboardWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'LeaderboardWhereInput' })
    t.list.field('OR', { type: 'LeaderboardWhereInput' })
    t.list.field('NOT', { type: 'LeaderboardWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('fullName', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('month', { type: 'StringNullableFilter' })
    t.field('targetAchievedYtd', { type: 'StringNullableFilter' })
    t.field('rankYtd', { type: 'StringNullableFilter' })
    t.field('targetAchievedQtd', { type: 'StringNullableFilter' })
    t.field('rankQtd', { type: 'StringNullableFilter' })
    t.field('targetAchievedMtd', { type: 'StringNullableFilter' })
    t.field('rankMtd', { type: 'StringNullableFilter' })
    t.field('lastRefreshedTimestamp', { type: 'DateTimeNullableFilter' })
  },
})

export const LeaderboardOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('fullName', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('month', { type: 'SortOrderInput' })
    t.field('targetAchievedYtd', { type: 'SortOrderInput' })
    t.field('rankYtd', { type: 'SortOrderInput' })
    t.field('targetAchievedQtd', { type: 'SortOrderInput' })
    t.field('rankQtd', { type: 'SortOrderInput' })
    t.field('targetAchievedMtd', { type: 'SortOrderInput' })
    t.field('rankMtd', { type: 'SortOrderInput' })
    t.field('lastRefreshedTimestamp', { type: 'SortOrderInput' })
  },
})

export const LeaderboardWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'LeaderboardWhereInput' })
    t.list.field('OR', { type: 'LeaderboardWhereInput' })
    t.list.field('NOT', { type: 'LeaderboardWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('fullName', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('month', { type: 'StringNullableFilter' })
    t.field('targetAchievedYtd', { type: 'StringNullableFilter' })
    t.field('rankYtd', { type: 'StringNullableFilter' })
    t.field('targetAchievedQtd', { type: 'StringNullableFilter' })
    t.field('rankQtd', { type: 'StringNullableFilter' })
    t.field('targetAchievedMtd', { type: 'StringNullableFilter' })
    t.field('rankMtd', { type: 'StringNullableFilter' })
    t.field('lastRefreshedTimestamp', { type: 'DateTimeNullableFilter' })
  },
})

export const LeaderboardOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('fullName', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('month', { type: 'SortOrderInput' })
    t.field('targetAchievedYtd', { type: 'SortOrderInput' })
    t.field('rankYtd', { type: 'SortOrderInput' })
    t.field('targetAchievedQtd', { type: 'SortOrderInput' })
    t.field('rankQtd', { type: 'SortOrderInput' })
    t.field('targetAchievedMtd', { type: 'SortOrderInput' })
    t.field('rankMtd', { type: 'SortOrderInput' })
    t.field('lastRefreshedTimestamp', { type: 'SortOrderInput' })
    t.field('_count', { type: 'LeaderboardCountOrderByAggregateInput' })
    t.field('_max', { type: 'LeaderboardMaxOrderByAggregateInput' })
    t.field('_min', { type: 'LeaderboardMinOrderByAggregateInput' })
  },
})

export const LeaderboardScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'LeaderboardScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'LeaderboardScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'LeaderboardScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('fullName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('country', { type: 'StringNullableWithAggregatesFilter' })
    t.field('year', { type: 'StringNullableWithAggregatesFilter' })
    t.field('quarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('month', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetAchievedYtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('rankYtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetAchievedQtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('rankQtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetAchievedMtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('rankMtd', { type: 'StringNullableWithAggregatesFilter' })
    t.field('lastRefreshedTimestamp', {
      type: 'DateTimeNullableWithAggregatesFilter',
    })
  },
})

export const SalesWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'SalesWhereInput' })
    t.list.field('OR', { type: 'SalesWhereInput' })
    t.list.field('NOT', { type: 'SalesWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('sipEligibility', { type: 'StringNullableFilter' })
    t.field('currency', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('month', { type: 'StringNullableFilter' })
    t.field('productType', { type: 'StringNullableFilter' })
    t.field('newHire', { type: 'StringNullableFilter' })
    t.field('guaranttedPayout', { type: 'StringNullableFilter' })
    t.field('mixedBag', { type: 'StringNullableFilter' })
    t.field('variablePayByMonth', { type: 'StringNullableFilter' })
    t.field('variablePayByYear', { type: 'StringNullableFilter' })
    t.field('variablePayByQuarter', { type: 'StringNullableFilter' })
    t.field('variablePayQ5', { type: 'StringNullableFilter' })
    t.field('salesByMonth', { type: 'StringNullableFilter' })
    t.field('salesByYear', { type: 'StringNullableFilter' })
    t.field('salesByQuarter', { type: 'StringNullableFilter' })
    t.field('targetByMonth', { type: 'StringNullableFilter' })
    t.field('targetByYear', { type: 'StringNullableFilter' })
    t.field('targetByQuarter', { type: 'StringNullableFilter' })
    t.field('salesAchievementPercentageByMonth', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByYear', { type: 'StringNullableFilter' })
    t.field('targetByYearUSD', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('commissionPercentageByQuarter', { type: 'StringNullableFilter' })
    t.field('commissionPayoutByQuarter', { type: 'StringNullableFilter' })
    t.field('variablePayoutByQuarter', { type: 'StringNullableFilter' })
    t.field('additionalPayout', { type: 'StringNullableFilter' })
    t.field('kicker', { type: 'StringNullableFilter' })
    t.field('earlyBirdEligibility', { type: 'StringNullableFilter' })
    t.field('earlyBird', { type: 'StringNullableFilter' })
    t.field('variablePayoutPercentageQ5', { type: 'StringNullableFilter' })
    t.field('variablePayoutQ5', { type: 'StringNullableFilter' })
    t.field('commissionPercentageQ5', { type: 'StringNullableFilter' })
    t.field('commissionPayoutQ5', { type: 'StringNullableFilter' })
    t.field('salesByMonth_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesByYear_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesByQuarter_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutQ5_forNewHire', { type: 'StringNullableFilter' })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPayoutQ5_forNewHire', { type: 'StringNullableFilter' })
    t.field('additionalPayoutCE', { type: 'StringNullableFilter' })
    t.field('additionalPayoutSC', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const SalesOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('sipEligibility', { type: 'SortOrderInput' })
    t.field('currency', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('month', { type: 'SortOrderInput' })
    t.field('productType', { type: 'SortOrderInput' })
    t.field('newHire', { type: 'SortOrderInput' })
    t.field('guaranttedPayout', { type: 'SortOrderInput' })
    t.field('mixedBag', { type: 'SortOrderInput' })
    t.field('variablePayByMonth', { type: 'SortOrderInput' })
    t.field('variablePayByYear', { type: 'SortOrderInput' })
    t.field('variablePayByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayQ5', { type: 'SortOrderInput' })
    t.field('salesByMonth', { type: 'SortOrderInput' })
    t.field('salesByYear', { type: 'SortOrderInput' })
    t.field('salesByQuarter', { type: 'SortOrderInput' })
    t.field('targetByMonth', { type: 'SortOrderInput' })
    t.field('targetByYear', { type: 'SortOrderInput' })
    t.field('targetByQuarter', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByMonth', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByYear', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageByYear', { type: 'SortOrderInput' })
    t.field('targetByYearUSD', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('commissionPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('commissionPayoutByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutByQuarter', { type: 'SortOrderInput' })
    t.field('additionalPayout', { type: 'SortOrderInput' })
    t.field('kicker', { type: 'SortOrderInput' })
    t.field('earlyBirdEligibility', { type: 'SortOrderInput' })
    t.field('earlyBird', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageQ5', { type: 'SortOrderInput' })
    t.field('variablePayoutQ5', { type: 'SortOrderInput' })
    t.field('commissionPercentageQ5', { type: 'SortOrderInput' })
    t.field('commissionPayoutQ5', { type: 'SortOrderInput' })
    t.field('salesByMonth_forNewHire', { type: 'SortOrderInput' })
    t.field('salesByYear_forNewHire', { type: 'SortOrderInput' })
    t.field('salesByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('commissionPercentageQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('variablePayoutQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('additionalPayoutCE', { type: 'SortOrderInput' })
    t.field('additionalPayoutSC', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
  },
})

export const SalesWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'SalesWhereInput' })
    t.list.field('OR', { type: 'SalesWhereInput' })
    t.list.field('NOT', { type: 'SalesWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('sipEligibility', { type: 'StringNullableFilter' })
    t.field('currency', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('month', { type: 'StringNullableFilter' })
    t.field('productType', { type: 'StringNullableFilter' })
    t.field('newHire', { type: 'StringNullableFilter' })
    t.field('guaranttedPayout', { type: 'StringNullableFilter' })
    t.field('mixedBag', { type: 'StringNullableFilter' })
    t.field('variablePayByMonth', { type: 'StringNullableFilter' })
    t.field('variablePayByYear', { type: 'StringNullableFilter' })
    t.field('variablePayByQuarter', { type: 'StringNullableFilter' })
    t.field('variablePayQ5', { type: 'StringNullableFilter' })
    t.field('salesByMonth', { type: 'StringNullableFilter' })
    t.field('salesByYear', { type: 'StringNullableFilter' })
    t.field('salesByQuarter', { type: 'StringNullableFilter' })
    t.field('targetByMonth', { type: 'StringNullableFilter' })
    t.field('targetByYear', { type: 'StringNullableFilter' })
    t.field('targetByQuarter', { type: 'StringNullableFilter' })
    t.field('salesAchievementPercentageByMonth', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByYear', { type: 'StringNullableFilter' })
    t.field('targetByYearUSD', { type: 'StringNullableFilter' })
    t.field('territoryCategory', { type: 'StringNullableFilter' })
    t.field('commissionPercentageByQuarter', { type: 'StringNullableFilter' })
    t.field('commissionPayoutByQuarter', { type: 'StringNullableFilter' })
    t.field('variablePayoutByQuarter', { type: 'StringNullableFilter' })
    t.field('additionalPayout', { type: 'StringNullableFilter' })
    t.field('kicker', { type: 'StringNullableFilter' })
    t.field('earlyBirdEligibility', { type: 'StringNullableFilter' })
    t.field('earlyBird', { type: 'StringNullableFilter' })
    t.field('variablePayoutPercentageQ5', { type: 'StringNullableFilter' })
    t.field('variablePayoutQ5', { type: 'StringNullableFilter' })
    t.field('commissionPercentageQ5', { type: 'StringNullableFilter' })
    t.field('commissionPayoutQ5', { type: 'StringNullableFilter' })
    t.field('salesByMonth_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesByYear_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesByQuarter_forNewHire', { type: 'StringNullableFilter' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('variablePayoutQ5_forNewHire', { type: 'StringNullableFilter' })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'StringNullableFilter',
    })
    t.field('commissionPayoutQ5_forNewHire', { type: 'StringNullableFilter' })
    t.field('additionalPayoutCE', { type: 'StringNullableFilter' })
    t.field('additionalPayoutSC', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const SalesOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('sipEligibility', { type: 'SortOrderInput' })
    t.field('currency', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('month', { type: 'SortOrderInput' })
    t.field('productType', { type: 'SortOrderInput' })
    t.field('newHire', { type: 'SortOrderInput' })
    t.field('guaranttedPayout', { type: 'SortOrderInput' })
    t.field('mixedBag', { type: 'SortOrderInput' })
    t.field('variablePayByMonth', { type: 'SortOrderInput' })
    t.field('variablePayByYear', { type: 'SortOrderInput' })
    t.field('variablePayByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayQ5', { type: 'SortOrderInput' })
    t.field('salesByMonth', { type: 'SortOrderInput' })
    t.field('salesByYear', { type: 'SortOrderInput' })
    t.field('salesByQuarter', { type: 'SortOrderInput' })
    t.field('targetByMonth', { type: 'SortOrderInput' })
    t.field('targetByYear', { type: 'SortOrderInput' })
    t.field('targetByQuarter', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByMonth', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByYear', { type: 'SortOrderInput' })
    t.field('salesAchievementPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageByYear', { type: 'SortOrderInput' })
    t.field('targetByYearUSD', { type: 'SortOrderInput' })
    t.field('territoryCategory', { type: 'SortOrderInput' })
    t.field('commissionPercentageByQuarter', { type: 'SortOrderInput' })
    t.field('commissionPayoutByQuarter', { type: 'SortOrderInput' })
    t.field('variablePayoutByQuarter', { type: 'SortOrderInput' })
    t.field('additionalPayout', { type: 'SortOrderInput' })
    t.field('kicker', { type: 'SortOrderInput' })
    t.field('earlyBirdEligibility', { type: 'SortOrderInput' })
    t.field('earlyBird', { type: 'SortOrderInput' })
    t.field('variablePayoutPercentageQ5', { type: 'SortOrderInput' })
    t.field('variablePayoutQ5', { type: 'SortOrderInput' })
    t.field('commissionPercentageQ5', { type: 'SortOrderInput' })
    t.field('commissionPayoutQ5', { type: 'SortOrderInput' })
    t.field('salesByMonth_forNewHire', { type: 'SortOrderInput' })
    t.field('salesByYear_forNewHire', { type: 'SortOrderInput' })
    t.field('salesByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'SortOrderInput',
    })
    t.field('commissionPercentageQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('variablePayoutQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'SortOrderInput' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'SortOrderInput' })
    t.field('additionalPayoutCE', { type: 'SortOrderInput' })
    t.field('additionalPayoutSC', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'SalesCountOrderByAggregateInput' })
    t.field('_avg', { type: 'SalesAvgOrderByAggregateInput' })
    t.field('_max', { type: 'SalesMaxOrderByAggregateInput' })
    t.field('_min', { type: 'SalesMinOrderByAggregateInput' })
    t.field('_sum', { type: 'SalesSumOrderByAggregateInput' })
  },
})

export const SalesScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'SalesScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'SalesScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'SalesScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('sipEligibility', { type: 'StringNullableWithAggregatesFilter' })
    t.field('currency', { type: 'StringNullableWithAggregatesFilter' })
    t.field('year', { type: 'StringNullableWithAggregatesFilter' })
    t.field('quarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('month', { type: 'StringNullableWithAggregatesFilter' })
    t.field('productType', { type: 'StringNullableWithAggregatesFilter' })
    t.field('newHire', { type: 'StringNullableWithAggregatesFilter' })
    t.field('guaranttedPayout', { type: 'StringNullableWithAggregatesFilter' })
    t.field('mixedBag', { type: 'StringNullableWithAggregatesFilter' })
    t.field('variablePayByMonth', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayByYear', { type: 'StringNullableWithAggregatesFilter' })
    t.field('variablePayByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayQ5', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesByMonth', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesByYear', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesByQuarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetByMonth', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetByYear', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetByQuarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesAchievementPercentageByMonth', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutPercentageByYear', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('targetByYearUSD', { type: 'StringNullableWithAggregatesFilter' })
    t.field('territoryCategory', { type: 'StringNullableWithAggregatesFilter' })
    t.field('commissionPercentageByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPayoutByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutByQuarter', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('additionalPayout', { type: 'StringNullableWithAggregatesFilter' })
    t.field('kicker', { type: 'StringNullableWithAggregatesFilter' })
    t.field('earlyBirdEligibility', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('earlyBird', { type: 'StringNullableWithAggregatesFilter' })
    t.field('variablePayoutPercentageQ5', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutQ5', { type: 'StringNullableWithAggregatesFilter' })
    t.field('commissionPercentageQ5', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPayoutQ5', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesByMonth_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesByYear_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('variablePayoutQ5_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('commissionPayoutQ5_forNewHire', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('additionalPayoutCE', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('additionalPayoutSC', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const Mobile_SalesWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'Mobile_SalesWhereInput' })
    t.list.field('OR', { type: 'Mobile_SalesWhereInput' })
    t.list.field('NOT', { type: 'Mobile_SalesWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('targetByQuarter', { type: 'StringNullableFilter' })
    t.field('targetByYear', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('type', { type: 'EnummobileSalesTargetTypeFilter' })
  },
})

export const Mobile_SalesOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('targetByQuarter', { type: 'SortOrderInput' })
    t.field('targetByYear', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const Mobile_SalesWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'Mobile_SalesWhereInput' })
    t.list.field('OR', { type: 'Mobile_SalesWhereInput' })
    t.list.field('NOT', { type: 'Mobile_SalesWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('targetByQuarter', { type: 'StringNullableFilter' })
    t.field('targetByYear', { type: 'StringNullableFilter' })
    t.field('quarter', { type: 'StringNullableFilter' })
    t.field('year', { type: 'StringNullableFilter' })
    t.field('type', { type: 'EnummobileSalesTargetTypeFilter' })
  },
})

export const Mobile_SalesOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('targetByQuarter', { type: 'SortOrderInput' })
    t.field('targetByYear', { type: 'SortOrderInput' })
    t.field('quarter', { type: 'SortOrderInput' })
    t.field('year', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('_count', { type: 'Mobile_SalesCountOrderByAggregateInput' })
    t.field('_avg', { type: 'Mobile_SalesAvgOrderByAggregateInput' })
    t.field('_max', { type: 'Mobile_SalesMaxOrderByAggregateInput' })
    t.field('_min', { type: 'Mobile_SalesMinOrderByAggregateInput' })
    t.field('_sum', { type: 'Mobile_SalesSumOrderByAggregateInput' })
  },
})

export const Mobile_SalesScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'Mobile_SalesScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'Mobile_SalesScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'Mobile_SalesScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetByQuarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('targetByYear', { type: 'StringNullableWithAggregatesFilter' })
    t.field('quarter', { type: 'StringNullableWithAggregatesFilter' })
    t.field('year', { type: 'StringNullableWithAggregatesFilter' })
    t.field('type', { type: 'EnummobileSalesTargetTypeWithAggregatesFilter' })
  },
})

export const PlanCallWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PlanCallWhereInput' })
    t.list.field('OR', { type: 'PlanCallWhereInput' })
    t.list.field('NOT', { type: 'PlanCallWhereInput' })
    t.field('uniqueIdInApp', { type: 'UuidFilter' })
    t.field('salesForceId', { type: 'StringNullableFilter' })
    t.field('subject', { type: 'StringNullableFilter' })
    t.field('startDate', { type: 'DateTimeNullableFilter' })
    t.field('endDate', { type: 'DateTimeNullableFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('location', { type: 'StringNullableFilter' })
    t.field('account', { type: 'StringNullableFilter' })
    t.field('contactId', { type: 'StringNullableFilter' })
    t.field('contactName', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('activityType', { type: 'StringNullableFilter' })
    t.field('activitySubtype', { type: 'StringNullableFilter' })
    t.field('activityOwnerName', { type: 'StringNullableFilter' })
    t.field('activityOwnerEmail', { type: 'StringNullableFilter' })
    t.field('ownerCountry', { type: 'StringNullableFilter' })
    t.field('status', { type: 'StringNullableFilter' })
    t.field('createdInApp', { type: 'DateTimeNullableFilter' })
    t.field('lastModifiedInApp', { type: 'DateTimeNullableFilter' })
  },
})

export const PlanCallOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallOrderByWithRelationInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'SortOrder' })
    t.field('salesForceId', { type: 'SortOrderInput' })
    t.field('subject', { type: 'SortOrderInput' })
    t.field('startDate', { type: 'SortOrderInput' })
    t.field('endDate', { type: 'SortOrderInput' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('location', { type: 'SortOrderInput' })
    t.field('account', { type: 'SortOrderInput' })
    t.field('contactId', { type: 'SortOrderInput' })
    t.field('contactName', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('activityType', { type: 'SortOrderInput' })
    t.field('activitySubtype', { type: 'SortOrderInput' })
    t.field('activityOwnerName', { type: 'SortOrderInput' })
    t.field('activityOwnerEmail', { type: 'SortOrderInput' })
    t.field('ownerCountry', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrderInput' })
    t.field('createdInApp', { type: 'SortOrderInput' })
    t.field('lastModifiedInApp', { type: 'SortOrderInput' })
  },
})

export const PlanCallWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallWhereUniqueInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'String' })
    t.list.field('AND', { type: 'PlanCallWhereInput' })
    t.list.field('OR', { type: 'PlanCallWhereInput' })
    t.list.field('NOT', { type: 'PlanCallWhereInput' })
    t.field('salesForceId', { type: 'StringNullableFilter' })
    t.field('subject', { type: 'StringNullableFilter' })
    t.field('startDate', { type: 'DateTimeNullableFilter' })
    t.field('endDate', { type: 'DateTimeNullableFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('location', { type: 'StringNullableFilter' })
    t.field('account', { type: 'StringNullableFilter' })
    t.field('contactId', { type: 'StringNullableFilter' })
    t.field('contactName', { type: 'StringNullableFilter' })
    t.field('division', { type: 'StringNullableFilter' })
    t.field('activityType', { type: 'StringNullableFilter' })
    t.field('activitySubtype', { type: 'StringNullableFilter' })
    t.field('activityOwnerName', { type: 'StringNullableFilter' })
    t.field('activityOwnerEmail', { type: 'StringNullableFilter' })
    t.field('ownerCountry', { type: 'StringNullableFilter' })
    t.field('status', { type: 'StringNullableFilter' })
    t.field('createdInApp', { type: 'DateTimeNullableFilter' })
    t.field('lastModifiedInApp', { type: 'DateTimeNullableFilter' })
  },
})

export const PlanCallOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallOrderByWithAggregationInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'SortOrder' })
    t.field('salesForceId', { type: 'SortOrderInput' })
    t.field('subject', { type: 'SortOrderInput' })
    t.field('startDate', { type: 'SortOrderInput' })
    t.field('endDate', { type: 'SortOrderInput' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('location', { type: 'SortOrderInput' })
    t.field('account', { type: 'SortOrderInput' })
    t.field('contactId', { type: 'SortOrderInput' })
    t.field('contactName', { type: 'SortOrderInput' })
    t.field('division', { type: 'SortOrderInput' })
    t.field('activityType', { type: 'SortOrderInput' })
    t.field('activitySubtype', { type: 'SortOrderInput' })
    t.field('activityOwnerName', { type: 'SortOrderInput' })
    t.field('activityOwnerEmail', { type: 'SortOrderInput' })
    t.field('ownerCountry', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrderInput' })
    t.field('createdInApp', { type: 'SortOrderInput' })
    t.field('lastModifiedInApp', { type: 'SortOrderInput' })
    t.field('_count', { type: 'PlanCallCountOrderByAggregateInput' })
    t.field('_max', { type: 'PlanCallMaxOrderByAggregateInput' })
    t.field('_min', { type: 'PlanCallMinOrderByAggregateInput' })
  },
})

export const PlanCallScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PlanCallScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'PlanCallScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'PlanCallScalarWhereWithAggregatesInput' })
    t.field('uniqueIdInApp', { type: 'UuidWithAggregatesFilter' })
    t.field('salesForceId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('subject', { type: 'StringNullableWithAggregatesFilter' })
    t.field('startDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('endDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('description', { type: 'StringNullableWithAggregatesFilter' })
    t.field('location', { type: 'StringNullableWithAggregatesFilter' })
    t.field('account', { type: 'StringNullableWithAggregatesFilter' })
    t.field('contactId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('contactName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('division', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activityType', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activitySubtype', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activityOwnerName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activityOwnerEmail', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('ownerCountry', { type: 'StringNullableWithAggregatesFilter' })
    t.field('status', { type: 'StringNullableWithAggregatesFilter' })
    t.field('createdInApp', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('lastModifiedInApp', {
      type: 'DateTimeNullableWithAggregatesFilter',
    })
  },
})

export const CaseLogWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CaseLogWhereInput' })
    t.list.field('OR', { type: 'CaseLogWhereInput' })
    t.list.field('NOT', { type: 'CaseLogWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('caseName', { type: 'StringNullableFilter' })
    t.field('startDate', { type: 'DateTimeNullableFilter' })
    t.field('endDate', { type: 'DateTimeNullableFilter' })
    t.field('account', { type: 'StringNullableFilter' })
    t.field('location', { type: 'StringNullableFilter' })
    t.field('contact', { type: 'StringNullableFilter' })
    t.field('secondaryContact', { type: 'StringNullableFilter' })
    t.field('activityOwnerName', { type: 'StringNullableFilter' })
    t.field('activityOwnerEmail', { type: 'StringNullableFilter' })
    t.field('status', { type: 'StringNullableFilter' })
    t.field('photoPaths', { type: 'StringNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionListRelationFilter',
    })
  },
})

export const CaseLogOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('caseName', { type: 'SortOrderInput' })
    t.field('startDate', { type: 'SortOrderInput' })
    t.field('endDate', { type: 'SortOrderInput' })
    t.field('account', { type: 'SortOrderInput' })
    t.field('location', { type: 'SortOrderInput' })
    t.field('contact', { type: 'SortOrderInput' })
    t.field('secondaryContact', { type: 'SortOrderInput' })
    t.field('activityOwnerName', { type: 'SortOrderInput' })
    t.field('activityOwnerEmail', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrderInput' })
    t.field('photoPaths', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionOrderByRelationAggregateInput',
    })
  },
})

export const CaseLogWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'CaseLogWhereInput' })
    t.list.field('OR', { type: 'CaseLogWhereInput' })
    t.list.field('NOT', { type: 'CaseLogWhereInput' })
    t.field('caseName', { type: 'StringNullableFilter' })
    t.field('startDate', { type: 'DateTimeNullableFilter' })
    t.field('endDate', { type: 'DateTimeNullableFilter' })
    t.field('account', { type: 'StringNullableFilter' })
    t.field('location', { type: 'StringNullableFilter' })
    t.field('contact', { type: 'StringNullableFilter' })
    t.field('secondaryContact', { type: 'StringNullableFilter' })
    t.field('activityOwnerName', { type: 'StringNullableFilter' })
    t.field('activityOwnerEmail', { type: 'StringNullableFilter' })
    t.field('status', { type: 'StringNullableFilter' })
    t.field('photoPaths', { type: 'StringNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionListRelationFilter',
    })
  },
})

export const CaseLogOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('caseName', { type: 'SortOrderInput' })
    t.field('startDate', { type: 'SortOrderInput' })
    t.field('endDate', { type: 'SortOrderInput' })
    t.field('account', { type: 'SortOrderInput' })
    t.field('location', { type: 'SortOrderInput' })
    t.field('contact', { type: 'SortOrderInput' })
    t.field('secondaryContact', { type: 'SortOrderInput' })
    t.field('activityOwnerName', { type: 'SortOrderInput' })
    t.field('activityOwnerEmail', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrderInput' })
    t.field('photoPaths', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'CaseLogCountOrderByAggregateInput' })
    t.field('_max', { type: 'CaseLogMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CaseLogMinOrderByAggregateInput' })
  },
})

export const CaseLogScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CaseLogScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'CaseLogScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'CaseLogScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('caseName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('startDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('endDate', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('account', { type: 'StringNullableWithAggregatesFilter' })
    t.field('location', { type: 'StringNullableWithAggregatesFilter' })
    t.field('contact', { type: 'StringNullableWithAggregatesFilter' })
    t.field('secondaryContact', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activityOwnerName', { type: 'StringNullableWithAggregatesFilter' })
    t.field('activityOwnerEmail', {
      type: 'StringNullableWithAggregatesFilter',
    })
    t.field('status', { type: 'StringNullableWithAggregatesFilter' })
    t.field('photoPaths', { type: 'StringNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const CaseLogSubmissionWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CaseLogSubmissionWhereInput' })
    t.list.field('OR', { type: 'CaseLogSubmissionWhereInput' })
    t.list.field('NOT', { type: 'CaseLogSubmissionWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('quantity', { type: 'StringNullableFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('caseLogId', { type: 'UuidNullableFilter' })
    t.field('productId', { type: 'UuidNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLog', { type: 'CaseLogNullableRelationFilter' })
    t.field('product', { type: 'ProductsNullableRelationFilter' })
  },
})

export const CaseLogSubmissionOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrderInput' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('caseLogId', { type: 'SortOrderInput' })
    t.field('productId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('caseLog', { type: 'CaseLogOrderByWithRelationInput' })
    t.field('product', { type: 'ProductsOrderByWithRelationInput' })
  },
})

export const CaseLogSubmissionWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'CaseLogSubmissionWhereInput' })
    t.list.field('OR', { type: 'CaseLogSubmissionWhereInput' })
    t.list.field('NOT', { type: 'CaseLogSubmissionWhereInput' })
    t.field('quantity', { type: 'StringNullableFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('caseLogId', { type: 'UuidNullableFilter' })
    t.field('productId', { type: 'UuidNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLog', { type: 'CaseLogNullableRelationFilter' })
    t.field('product', { type: 'ProductsNullableRelationFilter' })
  },
})

export const CaseLogSubmissionOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrderInput' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('caseLogId', { type: 'SortOrderInput' })
    t.field('productId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'CaseLogSubmissionCountOrderByAggregateInput' })
    t.field('_max', { type: 'CaseLogSubmissionMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CaseLogSubmissionMinOrderByAggregateInput' })
  },
})

export const CaseLogSubmissionScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'CaseLogSubmissionScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'CaseLogSubmissionScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'CaseLogSubmissionScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('quantity', { type: 'StringNullableWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('caseLogId', { type: 'UuidNullableWithAggregatesFilter' })
    t.field('productId', { type: 'UuidNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const SearchHistoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'SearchHistoryWhereInput' })
    t.list.field('OR', { type: 'SearchHistoryWhereInput' })
    t.list.field('NOT', { type: 'SearchHistoryWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('searchQuery', { type: 'StringNullableFilter' })
    t.field('searchType', { type: 'EnumSearchTypeNullableListFilter' })
    t.field('searchResults', { type: 'JsonNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const SearchHistoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('searchQuery', { type: 'SortOrderInput' })
    t.field('searchType', { type: 'SortOrder' })
    t.field('searchResults', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
  },
})

export const SearchHistoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'SearchHistoryWhereInput' })
    t.list.field('OR', { type: 'SearchHistoryWhereInput' })
    t.list.field('NOT', { type: 'SearchHistoryWhereInput' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('searchQuery', { type: 'StringNullableFilter' })
    t.field('searchType', { type: 'EnumSearchTypeNullableListFilter' })
    t.field('searchResults', { type: 'JsonNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const SearchHistoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrderInput' })
    t.field('searchQuery', { type: 'SortOrderInput' })
    t.field('searchType', { type: 'SortOrder' })
    t.field('searchResults', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'SearchHistoryCountOrderByAggregateInput' })
    t.field('_max', { type: 'SearchHistoryMaxOrderByAggregateInput' })
    t.field('_min', { type: 'SearchHistoryMinOrderByAggregateInput' })
  },
})

export const SearchHistoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'SearchHistoryScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'SearchHistoryScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'SearchHistoryScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('salesRepEmail', { type: 'StringNullableWithAggregatesFilter' })
    t.field('searchQuery', { type: 'StringNullableWithAggregatesFilter' })
    t.field('searchType', { type: 'EnumSearchTypeNullableListFilter' })
    t.field('searchResults', { type: 'JsonNullableListFilter' })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const ProductsWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductsWhereInput' })
    t.list.field('OR', { type: 'ProductsWhereInput' })
    t.list.field('NOT', { type: 'ProductsWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('upn', { type: 'StringNullableFilter' })
    t.field('gtin', { type: 'StringNullableFilter' })
    t.field('upnDescription', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionListRelationFilter',
    })
  },
})

export const ProductsOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('upn', { type: 'SortOrderInput' })
    t.field('gtin', { type: 'SortOrderInput' })
    t.field('upnDescription', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionOrderByRelationAggregateInput',
    })
  },
})

export const ProductsWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'ProductsWhereInput' })
    t.list.field('OR', { type: 'ProductsWhereInput' })
    t.list.field('NOT', { type: 'ProductsWhereInput' })
    t.field('upn', { type: 'StringNullableFilter' })
    t.field('gtin', { type: 'StringNullableFilter' })
    t.field('upnDescription', { type: 'StringNullableFilter' })
    t.field('country', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionListRelationFilter',
    })
  },
})

export const ProductsOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('upn', { type: 'SortOrderInput' })
    t.field('gtin', { type: 'SortOrderInput' })
    t.field('upnDescription', { type: 'SortOrderInput' })
    t.field('country', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrderInput' })
    t.field('updatedAt', { type: 'SortOrderInput' })
    t.field('_count', { type: 'ProductsCountOrderByAggregateInput' })
    t.field('_max', { type: 'ProductsMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProductsMinOrderByAggregateInput' })
  },
})

export const ProductsScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductsScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ProductsScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ProductsScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'UuidWithAggregatesFilter' })
    t.field('upn', { type: 'StringNullableWithAggregatesFilter' })
    t.field('gtin', { type: 'StringNullableWithAggregatesFilter' })
    t.field('upnDescription', { type: 'StringNullableWithAggregatesFilter' })
    t.field('country', { type: 'StringNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' })
  },
})

export const ContactSearchCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchCreateInput',
  definition(t) {
    t.field('salesRepEmail', { type: 'String' })
    t.field('hospital', { type: 'String' })
    t.field('topicsOfInterest', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('doctorName', { type: 'String' })
    t.field('doctorEmail', { type: 'String' })
    t.field('doctorAlternativeEmail', { type: 'String' })
    t.field('doctorDivision', { type: 'String' })
    t.field('doctorProfilePhoto', { type: 'String' })
    t.field('doctorSpecialty', { type: 'String' })
    t.field('doctorSalutation', { type: 'String' })
    t.field('doctorTitle', { type: 'String' })
    t.field('doctorPhone', { type: 'String' })
    t.field('doctorCountry', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ContactSearchUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('hospital', { type: 'String' })
    t.field('topicsOfInterest', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('doctorName', { type: 'String' })
    t.field('doctorEmail', { type: 'String' })
    t.field('doctorAlternativeEmail', { type: 'String' })
    t.field('doctorDivision', { type: 'String' })
    t.field('doctorProfilePhoto', { type: 'String' })
    t.field('doctorSpecialty', { type: 'String' })
    t.field('doctorSalutation', { type: 'String' })
    t.field('doctorTitle', { type: 'String' })
    t.field('doctorPhone', { type: 'String' })
    t.field('doctorCountry', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ContactSearchUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchUpdateInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('hospital', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('topicsOfInterest', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorEmail', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorAlternativeEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorDivision', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorProfilePhoto', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSpecialty', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSalutation', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorPhone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ContactSearchUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('hospital', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('topicsOfInterest', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorEmail', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorAlternativeEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorDivision', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorProfilePhoto', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSpecialty', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSalutation', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorPhone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ContactSearchCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('hospital', { type: 'String' })
    t.field('topicsOfInterest', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('doctorName', { type: 'String' })
    t.field('doctorEmail', { type: 'String' })
    t.field('doctorAlternativeEmail', { type: 'String' })
    t.field('doctorDivision', { type: 'String' })
    t.field('doctorProfilePhoto', { type: 'String' })
    t.field('doctorSpecialty', { type: 'String' })
    t.field('doctorSalutation', { type: 'String' })
    t.field('doctorTitle', { type: 'String' })
    t.field('doctorPhone', { type: 'String' })
    t.field('doctorCountry', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ContactSearchUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchUpdateManyMutationInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('hospital', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('topicsOfInterest', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorEmail', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorAlternativeEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorDivision', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorProfilePhoto', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSpecialty', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSalutation', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorPhone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ContactSearchUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('hospital', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('topicsOfInterest', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorEmail', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorAlternativeEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorDivision', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorProfilePhoto', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSpecialty', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorSalutation', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('doctorTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorPhone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('doctorCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ComplaintCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('complaintId', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('complaintName', { type: 'String' })
    t.field('complaintStatus', { type: 'String' })
    t.field('eventDate', { type: 'DateTime' })
    t.field('createdDate', { type: 'DateTime' })
    t.field('complaintTitle', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('awareDate', { type: 'DateTime' })
    t.field('timeOfEvent', { type: 'String' })
    t.field('typeOfSituationReporting', { type: 'String' })
    t.field('accName', { type: 'String' })
    t.field('procedureType', { type: 'String' })
    t.field('procedureDate', { type: 'DateTime' })
    t.field('treatedFor', { type: 'String' })
    t.field('procedureOutcome', { type: 'String' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'String' })
  },
})

export const ComplaintUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('complaintId', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('complaintName', { type: 'String' })
    t.field('complaintStatus', { type: 'String' })
    t.field('eventDate', { type: 'DateTime' })
    t.field('createdDate', { type: 'DateTime' })
    t.field('complaintTitle', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('awareDate', { type: 'DateTime' })
    t.field('timeOfEvent', { type: 'String' })
    t.field('typeOfSituationReporting', { type: 'String' })
    t.field('accName', { type: 'String' })
    t.field('procedureType', { type: 'String' })
    t.field('procedureDate', { type: 'DateTime' })
    t.field('treatedFor', { type: 'String' })
    t.field('procedureOutcome', { type: 'String' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'String' })
  },
})

export const ComplaintUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('complaintId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintStatus', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('eventDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('createdDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('complaintTitle', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('awareDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('timeOfEvent', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('typeOfSituationReporting', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('accName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('procedureDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('treatedFor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureOutcome', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('reasonsForUnsuccessfulProcedure', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
  },
})

export const ComplaintUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('complaintId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintStatus', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('eventDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('createdDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('complaintTitle', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('awareDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('timeOfEvent', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('typeOfSituationReporting', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('accName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('procedureDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('treatedFor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureOutcome', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('reasonsForUnsuccessfulProcedure', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
  },
})

export const ComplaintCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('complaintId', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('complaintName', { type: 'String' })
    t.field('complaintStatus', { type: 'String' })
    t.field('eventDate', { type: 'DateTime' })
    t.field('createdDate', { type: 'DateTime' })
    t.field('complaintTitle', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('awareDate', { type: 'DateTime' })
    t.field('timeOfEvent', { type: 'String' })
    t.field('typeOfSituationReporting', { type: 'String' })
    t.field('accName', { type: 'String' })
    t.field('procedureType', { type: 'String' })
    t.field('procedureDate', { type: 'DateTime' })
    t.field('treatedFor', { type: 'String' })
    t.field('procedureOutcome', { type: 'String' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'String' })
  },
})

export const ComplaintUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('complaintId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintStatus', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('eventDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('createdDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('complaintTitle', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('awareDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('timeOfEvent', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('typeOfSituationReporting', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('accName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('procedureDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('treatedFor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureOutcome', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('reasonsForUnsuccessfulProcedure', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
  },
})

export const ComplaintUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('complaintId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('complaintStatus', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('eventDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('createdDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('complaintTitle', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('awareDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('timeOfEvent', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('typeOfSituationReporting', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('accName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('procedureDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('treatedFor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('procedureOutcome', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('reasonsForUnsuccessfulProcedure', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
  },
})

export const UserProfileCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileCreateInput',
  definition(t) {
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('reportingTo', { type: 'String' })
    t.field('networkId', { type: 'String' })
    t.field('personId', { type: 'String' })
    t.field('title', { type: 'String' })
  },
})

export const UserProfileUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('reportingTo', { type: 'String' })
    t.field('networkId', { type: 'String' })
    t.field('personId', { type: 'String' })
    t.field('title', { type: 'String' })
  },
})

export const UserProfileUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileUpdateInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reportingTo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('networkId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('personId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserProfileUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reportingTo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('networkId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('personId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserProfileCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('reportingTo', { type: 'String' })
    t.field('networkId', { type: 'String' })
    t.field('personId', { type: 'String' })
    t.field('title', { type: 'String' })
  },
})

export const UserProfileUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileUpdateManyMutationInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reportingTo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('networkId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('personId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserProfileUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reportingTo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('networkId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('personId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const SliderAndCommissionCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionCreateInput',
  definition(t) {
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('variablePayoutPercentage', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentage', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const SliderAndCommissionUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('variablePayoutPercentage', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentage', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const SliderAndCommissionUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionUpdateInput',
  definition(t) {
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const SliderAndCommissionUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const SliderAndCommissionCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('variablePayoutPercentage', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentage', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const SliderAndCommissionUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionUpdateManyMutationInput',
  definition(t) {
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const SliderAndCommissionUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentage', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const TerritoryCategorizationCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationCreateInput',
  definition(t) {
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const TerritoryCategorizationUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const TerritoryCategorizationUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationUpdateInput',
  definition(t) {
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const TerritoryCategorizationUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const TerritoryCategorizationCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'String' })
    t.field('upperBound', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('year', { type: 'String' })
  },
})

export const TerritoryCategorizationUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationUpdateManyMutationInput',
  definition(t) {
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const TerritoryCategorizationUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('lowerBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upperBound', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const LeaderboardCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('targetAchievedYtd', { type: 'String' })
    t.field('rankYtd', { type: 'String' })
    t.field('targetAchievedQtd', { type: 'String' })
    t.field('rankQtd', { type: 'String' })
    t.field('targetAchievedMtd', { type: 'String' })
    t.field('rankMtd', { type: 'String' })
    t.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})

export const LeaderboardUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('targetAchievedYtd', { type: 'String' })
    t.field('rankYtd', { type: 'String' })
    t.field('targetAchievedQtd', { type: 'String' })
    t.field('rankQtd', { type: 'String' })
    t.field('targetAchievedMtd', { type: 'String' })
    t.field('rankMtd', { type: 'String' })
    t.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})

export const LeaderboardUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedYtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankYtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedQtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankQtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedMtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankMtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('lastRefreshedTimestamp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const LeaderboardUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedYtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankYtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedQtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankQtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedMtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankMtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('lastRefreshedTimestamp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const LeaderboardCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('fullName', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('targetAchievedYtd', { type: 'String' })
    t.field('rankYtd', { type: 'String' })
    t.field('targetAchievedQtd', { type: 'String' })
    t.field('rankQtd', { type: 'String' })
    t.field('targetAchievedMtd', { type: 'String' })
    t.field('rankMtd', { type: 'String' })
    t.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})

export const LeaderboardUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedYtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankYtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedQtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankQtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedMtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankMtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('lastRefreshedTimestamp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const LeaderboardUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('fullName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedYtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankYtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedQtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankQtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('targetAchievedMtd', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('rankMtd', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('lastRefreshedTimestamp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const SalesCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesCreateInput',
  definition(t) {
    t.field('salesRepEmail', { type: 'String' })
    t.field('sipEligibility', { type: 'String' })
    t.field('currency', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('productType', { type: 'String' })
    t.field('newHire', { type: 'String' })
    t.field('guaranttedPayout', { type: 'String' })
    t.field('mixedBag', { type: 'String' })
    t.field('variablePayByMonth', { type: 'String' })
    t.field('variablePayByYear', { type: 'String' })
    t.field('variablePayByQuarter', { type: 'String' })
    t.field('variablePayQ5', { type: 'String' })
    t.field('salesByMonth', { type: 'String' })
    t.field('salesByYear', { type: 'String' })
    t.field('salesByQuarter', { type: 'String' })
    t.field('targetByMonth', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('salesAchievementPercentageByMonth', { type: 'String' })
    t.field('salesAchievementPercentageByYear', { type: 'String' })
    t.field('salesAchievementPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByYear', { type: 'String' })
    t.field('targetByYearUSD', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentageByQuarter', { type: 'String' })
    t.field('commissionPayoutByQuarter', { type: 'String' })
    t.field('variablePayoutByQuarter', { type: 'String' })
    t.field('additionalPayout', { type: 'String' })
    t.field('kicker', { type: 'String' })
    t.field('earlyBirdEligibility', { type: 'String' })
    t.field('earlyBird', { type: 'String' })
    t.field('variablePayoutPercentageQ5', { type: 'String' })
    t.field('variablePayoutQ5', { type: 'String' })
    t.field('commissionPercentageQ5', { type: 'String' })
    t.field('commissionPayoutQ5', { type: 'String' })
    t.field('salesByMonth_forNewHire', { type: 'String' })
    t.field('salesByYear_forNewHire', { type: 'String' })
    t.field('salesByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchievementPercentageByYear_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'String' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'String' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutQ5_forNewHire', { type: 'String' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'String' })
    t.field('additionalPayoutCE', { type: 'String' })
    t.field('additionalPayoutSC', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SalesUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('sipEligibility', { type: 'String' })
    t.field('currency', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('productType', { type: 'String' })
    t.field('newHire', { type: 'String' })
    t.field('guaranttedPayout', { type: 'String' })
    t.field('mixedBag', { type: 'String' })
    t.field('variablePayByMonth', { type: 'String' })
    t.field('variablePayByYear', { type: 'String' })
    t.field('variablePayByQuarter', { type: 'String' })
    t.field('variablePayQ5', { type: 'String' })
    t.field('salesByMonth', { type: 'String' })
    t.field('salesByYear', { type: 'String' })
    t.field('salesByQuarter', { type: 'String' })
    t.field('targetByMonth', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('salesAchievementPercentageByMonth', { type: 'String' })
    t.field('salesAchievementPercentageByYear', { type: 'String' })
    t.field('salesAchievementPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByYear', { type: 'String' })
    t.field('targetByYearUSD', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentageByQuarter', { type: 'String' })
    t.field('commissionPayoutByQuarter', { type: 'String' })
    t.field('variablePayoutByQuarter', { type: 'String' })
    t.field('additionalPayout', { type: 'String' })
    t.field('kicker', { type: 'String' })
    t.field('earlyBirdEligibility', { type: 'String' })
    t.field('earlyBird', { type: 'String' })
    t.field('variablePayoutPercentageQ5', { type: 'String' })
    t.field('variablePayoutQ5', { type: 'String' })
    t.field('commissionPercentageQ5', { type: 'String' })
    t.field('commissionPayoutQ5', { type: 'String' })
    t.field('salesByMonth_forNewHire', { type: 'String' })
    t.field('salesByYear_forNewHire', { type: 'String' })
    t.field('salesByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchievementPercentageByYear_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'String' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'String' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutQ5_forNewHire', { type: 'String' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'String' })
    t.field('additionalPayoutCE', { type: 'String' })
    t.field('additionalPayoutSC', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SalesUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesUpdateInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('sipEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('currency', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productType', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('newHire', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('guaranttedPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('mixedBag', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYearUSD', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('kicker', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('earlyBirdEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('earlyBird', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutCE', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutSC', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SalesUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('sipEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('currency', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productType', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('newHire', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('guaranttedPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('mixedBag', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYearUSD', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('kicker', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('earlyBirdEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('earlyBird', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutCE', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutSC', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SalesCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('sipEligibility', { type: 'String' })
    t.field('currency', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('month', { type: 'String' })
    t.field('productType', { type: 'String' })
    t.field('newHire', { type: 'String' })
    t.field('guaranttedPayout', { type: 'String' })
    t.field('mixedBag', { type: 'String' })
    t.field('variablePayByMonth', { type: 'String' })
    t.field('variablePayByYear', { type: 'String' })
    t.field('variablePayByQuarter', { type: 'String' })
    t.field('variablePayQ5', { type: 'String' })
    t.field('salesByMonth', { type: 'String' })
    t.field('salesByYear', { type: 'String' })
    t.field('salesByQuarter', { type: 'String' })
    t.field('targetByMonth', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('salesAchievementPercentageByMonth', { type: 'String' })
    t.field('salesAchievementPercentageByYear', { type: 'String' })
    t.field('salesAchievementPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter', { type: 'String' })
    t.field('variablePayoutPercentageByYear', { type: 'String' })
    t.field('targetByYearUSD', { type: 'String' })
    t.field('territoryCategory', { type: 'String' })
    t.field('commissionPercentageByQuarter', { type: 'String' })
    t.field('commissionPayoutByQuarter', { type: 'String' })
    t.field('variablePayoutByQuarter', { type: 'String' })
    t.field('additionalPayout', { type: 'String' })
    t.field('kicker', { type: 'String' })
    t.field('earlyBirdEligibility', { type: 'String' })
    t.field('earlyBird', { type: 'String' })
    t.field('variablePayoutPercentageQ5', { type: 'String' })
    t.field('variablePayoutQ5', { type: 'String' })
    t.field('commissionPercentageQ5', { type: 'String' })
    t.field('commissionPayoutQ5', { type: 'String' })
    t.field('salesByMonth_forNewHire', { type: 'String' })
    t.field('salesByYear_forNewHire', { type: 'String' })
    t.field('salesByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('salesAchievementPercentageByYear_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'String' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'String' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'String' })
    t.field('variablePayoutQ5_forNewHire', { type: 'String' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'String' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'String' })
    t.field('additionalPayoutCE', { type: 'String' })
    t.field('additionalPayoutSC', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SalesUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesUpdateManyMutationInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('sipEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('currency', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productType', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('newHire', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('guaranttedPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('mixedBag', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYearUSD', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('kicker', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('earlyBirdEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('earlyBird', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutCE', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutSC', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SalesUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('sipEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('currency', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('month', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productType', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('newHire', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('guaranttedPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('mixedBag', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByMonth', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYearUSD', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('territoryCategory', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayout', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('kicker', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('earlyBirdEligibility', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('earlyBird', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('variablePayoutPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByMonth_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPercentageQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('variablePayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutByQuarter_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('commissionPayoutQ5_forNewHire', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutCE', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('additionalPayoutSC', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const Mobile_SalesCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesCreateInput',
  definition(t) {
    t.field('salesRepEmail', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('type', { type: 'mobileSalesTargetType' })
  },
})

export const Mobile_SalesUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('type', { type: 'mobileSalesTargetType' })
  },
})

export const Mobile_SalesUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesUpdateInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'EnummobileSalesTargetTypeFieldUpdateOperationsInput',
    })
  },
})

export const Mobile_SalesUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'EnummobileSalesTargetTypeFieldUpdateOperationsInput',
    })
  },
})

export const Mobile_SalesCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('targetByQuarter', { type: 'String' })
    t.field('targetByYear', { type: 'String' })
    t.field('quarter', { type: 'String' })
    t.field('year', { type: 'String' })
    t.field('type', { type: 'mobileSalesTargetType' })
  },
})

export const Mobile_SalesUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesUpdateManyMutationInput',
  definition(t) {
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'EnummobileSalesTargetTypeFieldUpdateOperationsInput',
    })
  },
})

export const Mobile_SalesUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByQuarter', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('targetByYear', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('quarter', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('year', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'EnummobileSalesTargetTypeFieldUpdateOperationsInput',
    })
  },
})

export const PlanCallCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallCreateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'String' })
    t.field('salesForceId', { type: 'String' })
    t.field('subject', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('description', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('account', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('contactName', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('activityType', { type: 'String' })
    t.field('activitySubtype', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('ownerCountry', { type: 'String' })
    t.field('status', { type: 'String' })
    t.field('createdInApp', { type: 'DateTime' })
    t.field('lastModifiedInApp', { type: 'DateTime' })
  },
})

export const PlanCallUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallUncheckedCreateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'String' })
    t.field('salesForceId', { type: 'String' })
    t.field('subject', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('description', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('account', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('contactName', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('activityType', { type: 'String' })
    t.field('activitySubtype', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('ownerCountry', { type: 'String' })
    t.field('status', { type: 'String' })
    t.field('createdInApp', { type: 'DateTime' })
    t.field('lastModifiedInApp', { type: 'DateTime' })
  },
})

export const PlanCallUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallUpdateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesForceId', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('activityType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activitySubtype', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('ownerCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('lastModifiedInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const PlanCallUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallUncheckedUpdateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesForceId', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('activityType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activitySubtype', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('ownerCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('lastModifiedInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const PlanCallCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallCreateManyInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'String' })
    t.field('salesForceId', { type: 'String' })
    t.field('subject', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('description', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('account', { type: 'String' })
    t.field('contactId', { type: 'String' })
    t.field('contactName', { type: 'String' })
    t.field('division', { type: 'String' })
    t.field('activityType', { type: 'String' })
    t.field('activitySubtype', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('ownerCountry', { type: 'String' })
    t.field('status', { type: 'String' })
    t.field('createdInApp', { type: 'DateTime' })
    t.field('lastModifiedInApp', { type: 'DateTime' })
  },
})

export const PlanCallUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallUpdateManyMutationInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesForceId', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('activityType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activitySubtype', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('ownerCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('lastModifiedInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const PlanCallUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallUncheckedUpdateManyInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesForceId', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contactName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('division', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('activityType', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activitySubtype', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('ownerCountry', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('lastModifiedInApp', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const CaseLogCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('caseName', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('account', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('contact', { type: 'String' })
    t.field('secondaryContact', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('status', { type: 'String' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionCreateNestedManyWithoutCaseLogInput',
    })
  },
})

export const CaseLogUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('caseName', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('account', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('contact', { type: 'String' })
    t.field('secondaryContact', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('status', { type: 'String' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUncheckedCreateNestedManyWithoutCaseLogInput',
    })
  },
})

export const CaseLogUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUpdateManyWithoutCaseLogNestedInput',
    })
  },
})

export const CaseLogUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUncheckedUpdateManyWithoutCaseLogNestedInput',
    })
  },
})

export const CaseLogCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('caseName', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('account', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('contact', { type: 'String' })
    t.field('secondaryContact', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('status', { type: 'String' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const CaseLogUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const CaseLogSubmissionCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLog', {
      type: 'CaseLogCreateNestedOneWithoutCaseLogSubmissionInput',
    })
    t.field('product', {
      type: 'ProductsCreateNestedOneWithoutCaseLogSubmissionInput',
    })
  },
})

export const CaseLogSubmissionUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('caseLogId', { type: 'String' })
    t.field('productId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLog', {
      type: 'CaseLogUpdateOneWithoutCaseLogSubmissionNestedInput',
    })
    t.field('product', {
      type: 'ProductsUpdateOneWithoutCaseLogSubmissionNestedInput',
    })
  },
})

export const CaseLogSubmissionUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('caseLogId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const CaseLogSubmissionCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('caseLogId', { type: 'String' })
    t.field('productId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const CaseLogSubmissionUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('caseLogId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('productId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SearchHistoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('searchQuery', { type: 'String' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SearchHistoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('searchQuery', { type: 'String' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SearchHistoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('searchQuery', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SearchHistoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('searchQuery', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SearchHistoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('searchQuery', { type: 'String' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const SearchHistoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('searchQuery', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const SearchHistoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('searchQuery', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('searchType', { type: 'SearchType' })
    t.list.field('searchResults', { type: 'Json' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductsCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('upn', { type: 'String' })
    t.field('gtin', { type: 'String' })
    t.field('upnDescription', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductsUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('upn', { type: 'String' })
    t.field('gtin', { type: 'String' })
    t.field('upnDescription', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUncheckedCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductsUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUpdateManyWithoutProductNestedInput',
    })
  },
})

export const ProductsUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLogSubmission', {
      type: 'CaseLogSubmissionUncheckedUpdateManyWithoutProductNestedInput',
    })
  },
})

export const ProductsCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('upn', { type: 'String' })
    t.field('gtin', { type: 'String' })
    t.field('upnDescription', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductsUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductsUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const ContactSearchCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('hospital', { type: 'SortOrder' })
    t.field('topicsOfInterest', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('doctorName', { type: 'SortOrder' })
    t.field('doctorEmail', { type: 'SortOrder' })
    t.field('doctorAlternativeEmail', { type: 'SortOrder' })
    t.field('doctorDivision', { type: 'SortOrder' })
    t.field('doctorProfilePhoto', { type: 'SortOrder' })
    t.field('doctorSpecialty', { type: 'SortOrder' })
    t.field('doctorSalutation', { type: 'SortOrder' })
    t.field('doctorTitle', { type: 'SortOrder' })
    t.field('doctorPhone', { type: 'SortOrder' })
    t.field('doctorCountry', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ContactSearchAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ContactSearchMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('hospital', { type: 'SortOrder' })
    t.field('topicsOfInterest', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('doctorName', { type: 'SortOrder' })
    t.field('doctorEmail', { type: 'SortOrder' })
    t.field('doctorAlternativeEmail', { type: 'SortOrder' })
    t.field('doctorDivision', { type: 'SortOrder' })
    t.field('doctorProfilePhoto', { type: 'SortOrder' })
    t.field('doctorSpecialty', { type: 'SortOrder' })
    t.field('doctorSalutation', { type: 'SortOrder' })
    t.field('doctorTitle', { type: 'SortOrder' })
    t.field('doctorPhone', { type: 'SortOrder' })
    t.field('doctorCountry', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ContactSearchMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('hospital', { type: 'SortOrder' })
    t.field('topicsOfInterest', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('doctorName', { type: 'SortOrder' })
    t.field('doctorEmail', { type: 'SortOrder' })
    t.field('doctorAlternativeEmail', { type: 'SortOrder' })
    t.field('doctorDivision', { type: 'SortOrder' })
    t.field('doctorProfilePhoto', { type: 'SortOrder' })
    t.field('doctorSpecialty', { type: 'SortOrder' })
    t.field('doctorSalutation', { type: 'SortOrder' })
    t.field('doctorTitle', { type: 'SortOrder' })
    t.field('doctorPhone', { type: 'SortOrder' })
    t.field('doctorCountry', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ContactSearchSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ContactSearchSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const UuidFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UuidFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedUuidFilter' })
  },
})

export const ComplaintCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('complaintId', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('complaintName', { type: 'SortOrder' })
    t.field('complaintStatus', { type: 'SortOrder' })
    t.field('eventDate', { type: 'SortOrder' })
    t.field('createdDate', { type: 'SortOrder' })
    t.field('complaintTitle', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('awareDate', { type: 'SortOrder' })
    t.field('timeOfEvent', { type: 'SortOrder' })
    t.field('typeOfSituationReporting', { type: 'SortOrder' })
    t.field('accName', { type: 'SortOrder' })
    t.field('procedureType', { type: 'SortOrder' })
    t.field('procedureDate', { type: 'SortOrder' })
    t.field('treatedFor', { type: 'SortOrder' })
    t.field('procedureOutcome', { type: 'SortOrder' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'SortOrder' })
  },
})

export const ComplaintMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('complaintId', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('complaintName', { type: 'SortOrder' })
    t.field('complaintStatus', { type: 'SortOrder' })
    t.field('eventDate', { type: 'SortOrder' })
    t.field('createdDate', { type: 'SortOrder' })
    t.field('complaintTitle', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('awareDate', { type: 'SortOrder' })
    t.field('timeOfEvent', { type: 'SortOrder' })
    t.field('typeOfSituationReporting', { type: 'SortOrder' })
    t.field('accName', { type: 'SortOrder' })
    t.field('procedureType', { type: 'SortOrder' })
    t.field('procedureDate', { type: 'SortOrder' })
    t.field('treatedFor', { type: 'SortOrder' })
    t.field('procedureOutcome', { type: 'SortOrder' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'SortOrder' })
  },
})

export const ComplaintMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ComplaintMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('complaintId', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('complaintName', { type: 'SortOrder' })
    t.field('complaintStatus', { type: 'SortOrder' })
    t.field('eventDate', { type: 'SortOrder' })
    t.field('createdDate', { type: 'SortOrder' })
    t.field('complaintTitle', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('awareDate', { type: 'SortOrder' })
    t.field('timeOfEvent', { type: 'SortOrder' })
    t.field('typeOfSituationReporting', { type: 'SortOrder' })
    t.field('accName', { type: 'SortOrder' })
    t.field('procedureType', { type: 'SortOrder' })
    t.field('procedureDate', { type: 'SortOrder' })
    t.field('treatedFor', { type: 'SortOrder' })
    t.field('procedureOutcome', { type: 'SortOrder' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'SortOrder' })
  },
})

export const UuidWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UuidWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedUuidWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const UserProfileCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('reportingTo', { type: 'SortOrder' })
    t.field('networkId', { type: 'SortOrder' })
    t.field('personId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const UserProfileAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserProfileMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('reportingTo', { type: 'SortOrder' })
    t.field('networkId', { type: 'SortOrder' })
    t.field('personId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const UserProfileMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('reportingTo', { type: 'SortOrder' })
    t.field('networkId', { type: 'SortOrder' })
    t.field('personId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const UserProfileSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserProfileSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const SliderAndCommissionCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('variablePayoutPercentage', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentage', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const SliderAndCommissionAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const SliderAndCommissionMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('variablePayoutPercentage', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentage', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const SliderAndCommissionMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('variablePayoutPercentage', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentage', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const SliderAndCommissionSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SliderAndCommissionSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const TerritoryCategorizationCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const TerritoryCategorizationAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const TerritoryCategorizationMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const TerritoryCategorizationMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('lowerBound', { type: 'SortOrder' })
    t.field('upperBound', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
  },
})

export const TerritoryCategorizationSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TerritoryCategorizationSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const LeaderboardCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('targetAchievedYtd', { type: 'SortOrder' })
    t.field('rankYtd', { type: 'SortOrder' })
    t.field('targetAchievedQtd', { type: 'SortOrder' })
    t.field('rankQtd', { type: 'SortOrder' })
    t.field('targetAchievedMtd', { type: 'SortOrder' })
    t.field('rankMtd', { type: 'SortOrder' })
    t.field('lastRefreshedTimestamp', { type: 'SortOrder' })
  },
})

export const LeaderboardMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('targetAchievedYtd', { type: 'SortOrder' })
    t.field('rankYtd', { type: 'SortOrder' })
    t.field('targetAchievedQtd', { type: 'SortOrder' })
    t.field('rankQtd', { type: 'SortOrder' })
    t.field('targetAchievedMtd', { type: 'SortOrder' })
    t.field('rankMtd', { type: 'SortOrder' })
    t.field('lastRefreshedTimestamp', { type: 'SortOrder' })
  },
})

export const LeaderboardMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'LeaderboardMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('targetAchievedYtd', { type: 'SortOrder' })
    t.field('rankYtd', { type: 'SortOrder' })
    t.field('targetAchievedQtd', { type: 'SortOrder' })
    t.field('rankQtd', { type: 'SortOrder' })
    t.field('targetAchievedMtd', { type: 'SortOrder' })
    t.field('rankMtd', { type: 'SortOrder' })
    t.field('lastRefreshedTimestamp', { type: 'SortOrder' })
  },
})

export const SalesCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('sipEligibility', { type: 'SortOrder' })
    t.field('currency', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('productType', { type: 'SortOrder' })
    t.field('newHire', { type: 'SortOrder' })
    t.field('guaranttedPayout', { type: 'SortOrder' })
    t.field('mixedBag', { type: 'SortOrder' })
    t.field('variablePayByMonth', { type: 'SortOrder' })
    t.field('variablePayByYear', { type: 'SortOrder' })
    t.field('variablePayByQuarter', { type: 'SortOrder' })
    t.field('variablePayQ5', { type: 'SortOrder' })
    t.field('salesByMonth', { type: 'SortOrder' })
    t.field('salesByYear', { type: 'SortOrder' })
    t.field('salesByQuarter', { type: 'SortOrder' })
    t.field('targetByMonth', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByMonth', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByYear', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByYear', { type: 'SortOrder' })
    t.field('targetByYearUSD', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter', { type: 'SortOrder' })
    t.field('additionalPayout', { type: 'SortOrder' })
    t.field('kicker', { type: 'SortOrder' })
    t.field('earlyBirdEligibility', { type: 'SortOrder' })
    t.field('earlyBird', { type: 'SortOrder' })
    t.field('variablePayoutPercentageQ5', { type: 'SortOrder' })
    t.field('variablePayoutQ5', { type: 'SortOrder' })
    t.field('commissionPercentageQ5', { type: 'SortOrder' })
    t.field('commissionPayoutQ5', { type: 'SortOrder' })
    t.field('salesByMonth_forNewHire', { type: 'SortOrder' })
    t.field('salesByYear_forNewHire', { type: 'SortOrder' })
    t.field('salesByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('additionalPayoutCE', { type: 'SortOrder' })
    t.field('additionalPayoutSC', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const SalesAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const SalesMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('sipEligibility', { type: 'SortOrder' })
    t.field('currency', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('productType', { type: 'SortOrder' })
    t.field('newHire', { type: 'SortOrder' })
    t.field('guaranttedPayout', { type: 'SortOrder' })
    t.field('mixedBag', { type: 'SortOrder' })
    t.field('variablePayByMonth', { type: 'SortOrder' })
    t.field('variablePayByYear', { type: 'SortOrder' })
    t.field('variablePayByQuarter', { type: 'SortOrder' })
    t.field('variablePayQ5', { type: 'SortOrder' })
    t.field('salesByMonth', { type: 'SortOrder' })
    t.field('salesByYear', { type: 'SortOrder' })
    t.field('salesByQuarter', { type: 'SortOrder' })
    t.field('targetByMonth', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByMonth', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByYear', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByYear', { type: 'SortOrder' })
    t.field('targetByYearUSD', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter', { type: 'SortOrder' })
    t.field('additionalPayout', { type: 'SortOrder' })
    t.field('kicker', { type: 'SortOrder' })
    t.field('earlyBirdEligibility', { type: 'SortOrder' })
    t.field('earlyBird', { type: 'SortOrder' })
    t.field('variablePayoutPercentageQ5', { type: 'SortOrder' })
    t.field('variablePayoutQ5', { type: 'SortOrder' })
    t.field('commissionPercentageQ5', { type: 'SortOrder' })
    t.field('commissionPayoutQ5', { type: 'SortOrder' })
    t.field('salesByMonth_forNewHire', { type: 'SortOrder' })
    t.field('salesByYear_forNewHire', { type: 'SortOrder' })
    t.field('salesByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('additionalPayoutCE', { type: 'SortOrder' })
    t.field('additionalPayoutSC', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const SalesMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('sipEligibility', { type: 'SortOrder' })
    t.field('currency', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('month', { type: 'SortOrder' })
    t.field('productType', { type: 'SortOrder' })
    t.field('newHire', { type: 'SortOrder' })
    t.field('guaranttedPayout', { type: 'SortOrder' })
    t.field('mixedBag', { type: 'SortOrder' })
    t.field('variablePayByMonth', { type: 'SortOrder' })
    t.field('variablePayByYear', { type: 'SortOrder' })
    t.field('variablePayByQuarter', { type: 'SortOrder' })
    t.field('variablePayQ5', { type: 'SortOrder' })
    t.field('salesByMonth', { type: 'SortOrder' })
    t.field('salesByYear', { type: 'SortOrder' })
    t.field('salesByQuarter', { type: 'SortOrder' })
    t.field('targetByMonth', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByMonth', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByYear', { type: 'SortOrder' })
    t.field('salesAchievementPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutPercentageByYear', { type: 'SortOrder' })
    t.field('targetByYearUSD', { type: 'SortOrder' })
    t.field('territoryCategory', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter', { type: 'SortOrder' })
    t.field('additionalPayout', { type: 'SortOrder' })
    t.field('kicker', { type: 'SortOrder' })
    t.field('earlyBirdEligibility', { type: 'SortOrder' })
    t.field('earlyBird', { type: 'SortOrder' })
    t.field('variablePayoutPercentageQ5', { type: 'SortOrder' })
    t.field('variablePayoutQ5', { type: 'SortOrder' })
    t.field('commissionPercentageQ5', { type: 'SortOrder' })
    t.field('commissionPayoutQ5', { type: 'SortOrder' })
    t.field('salesByMonth_forNewHire', { type: 'SortOrder' })
    t.field('salesByYear_forNewHire', { type: 'SortOrder' })
    t.field('salesByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'SortOrder',
    })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('variablePayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'SortOrder' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'SortOrder' })
    t.field('additionalPayoutCE', { type: 'SortOrder' })
    t.field('additionalPayoutSC', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const SalesSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SalesSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const EnummobileSalesTargetTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnummobileSalesTargetTypeFilter',
  definition(t) {
    t.field('equals', { type: 'mobileSalesTargetType' })
    t.list.field('in', { type: 'mobileSalesTargetType' })
    t.list.field('notIn', { type: 'mobileSalesTargetType' })
    t.field('not', { type: 'NestedEnummobileSalesTargetTypeFilter' })
  },
})

export const Mobile_SalesCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const Mobile_SalesAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const Mobile_SalesMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const Mobile_SalesMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('targetByQuarter', { type: 'SortOrder' })
    t.field('targetByYear', { type: 'SortOrder' })
    t.field('quarter', { type: 'SortOrder' })
    t.field('year', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const Mobile_SalesSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Mobile_SalesSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const EnummobileSalesTargetTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnummobileSalesTargetTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'mobileSalesTargetType' })
    t.list.field('in', { type: 'mobileSalesTargetType' })
    t.list.field('notIn', { type: 'mobileSalesTargetType' })
    t.field('not', {
      type: 'NestedEnummobileSalesTargetTypeWithAggregatesFilter',
    })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnummobileSalesTargetTypeFilter' })
    t.field('_max', { type: 'NestedEnummobileSalesTargetTypeFilter' })
  },
})

export const PlanCallCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallCountOrderByAggregateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'SortOrder' })
    t.field('salesForceId', { type: 'SortOrder' })
    t.field('subject', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('contactName', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('activityType', { type: 'SortOrder' })
    t.field('activitySubtype', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('ownerCountry', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdInApp', { type: 'SortOrder' })
    t.field('lastModifiedInApp', { type: 'SortOrder' })
  },
})

export const PlanCallMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallMaxOrderByAggregateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'SortOrder' })
    t.field('salesForceId', { type: 'SortOrder' })
    t.field('subject', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('contactName', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('activityType', { type: 'SortOrder' })
    t.field('activitySubtype', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('ownerCountry', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdInApp', { type: 'SortOrder' })
    t.field('lastModifiedInApp', { type: 'SortOrder' })
  },
})

export const PlanCallMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PlanCallMinOrderByAggregateInput',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'SortOrder' })
    t.field('salesForceId', { type: 'SortOrder' })
    t.field('subject', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('contactId', { type: 'SortOrder' })
    t.field('contactName', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('activityType', { type: 'SortOrder' })
    t.field('activitySubtype', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('ownerCountry', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdInApp', { type: 'SortOrder' })
    t.field('lastModifiedInApp', { type: 'SortOrder' })
  },
})

export const StringNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'String' })
    t.field('has', { type: 'String' })
    t.list.field('hasEvery', { type: 'String' })
    t.list.field('hasSome', { type: 'String' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const CaseLogSubmissionListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CaseLogSubmissionWhereInput' })
    t.field('some', { type: 'CaseLogSubmissionWhereInput' })
    t.field('none', { type: 'CaseLogSubmissionWhereInput' })
  },
})

export const CaseLogSubmissionOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const CaseLogCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('caseName', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('contact', { type: 'SortOrder' })
    t.field('secondaryContact', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('photoPaths', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CaseLogMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('caseName', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('contact', { type: 'SortOrder' })
    t.field('secondaryContact', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CaseLogMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('caseName', { type: 'SortOrder' })
    t.field('startDate', { type: 'SortOrder' })
    t.field('endDate', { type: 'SortOrder' })
    t.field('account', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('contact', { type: 'SortOrder' })
    t.field('secondaryContact', { type: 'SortOrder' })
    t.field('activityOwnerName', { type: 'SortOrder' })
    t.field('activityOwnerEmail', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UuidNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UuidNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedUuidNullableFilter' })
  },
})

export const CaseLogNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'CaseLogWhereInput' })
    t.field('isNot', { type: 'CaseLogWhereInput' })
  },
})

export const ProductsNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProductsWhereInput' })
    t.field('isNot', { type: 'ProductsWhereInput' })
  },
})

export const CaseLogSubmissionCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('caseLogId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CaseLogSubmissionMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('caseLogId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CaseLogSubmissionMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('caseLogId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UuidNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UuidNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedUuidNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const EnumSearchTypeNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumSearchTypeNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'SearchType' })
    t.field('has', { type: 'SearchType' })
    t.list.field('hasEvery', { type: 'SearchType' })
    t.list.field('hasSome', { type: 'SearchType' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const JsonNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Json' })
    t.field('has', { type: 'Json' })
    t.list.field('hasEvery', { type: 'Json' })
    t.list.field('hasSome', { type: 'Json' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const SearchHistoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('searchQuery', { type: 'SortOrder' })
    t.field('searchType', { type: 'SortOrder' })
    t.field('searchResults', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const SearchHistoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('searchQuery', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const SearchHistoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('salesRepEmail', { type: 'SortOrder' })
    t.field('searchQuery', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductsCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('upn', { type: 'SortOrder' })
    t.field('gtin', { type: 'SortOrder' })
    t.field('upnDescription', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductsMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('upn', { type: 'SortOrder' })
    t.field('gtin', { type: 'SortOrder' })
    t.field('upnDescription', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductsMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('upn', { type: 'SortOrder' })
    t.field('gtin', { type: 'SortOrder' })
    t.field('upnDescription', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const EnummobileSalesTargetTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnummobileSalesTargetTypeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'mobileSalesTargetType' })
  },
})

export const CaseLogCreatephotoPathsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreatephotoPathsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const CaseLogSubmissionCreateNestedManyWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateNestedManyWithoutCaseLogInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutCaseLogInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyCaseLogInputEnvelope',
    })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
  },
})

export const CaseLogSubmissionUncheckedCreateNestedManyWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedCreateNestedManyWithoutCaseLogInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutCaseLogInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyCaseLogInputEnvelope',
    })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
  },
})

export const CaseLogUpdatephotoPathsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdatephotoPathsInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const CaseLogSubmissionUpdateManyWithoutCaseLogNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateManyWithoutCaseLogNestedInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutCaseLogInput',
    })
    t.list.field('upsert', {
      type: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutCaseLogInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyCaseLogInputEnvelope',
    })
    t.list.field('set', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('delete', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('update', {
      type: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutCaseLogInput',
    })
    t.list.field('updateMany', {
      type: 'CaseLogSubmissionUpdateManyWithWhereWithoutCaseLogInput',
    })
    t.list.field('deleteMany', { type: 'CaseLogSubmissionScalarWhereInput' })
  },
})

export const CaseLogSubmissionUncheckedUpdateManyWithoutCaseLogNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateManyWithoutCaseLogNestedInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutCaseLogInput',
    })
    t.list.field('upsert', {
      type: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutCaseLogInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyCaseLogInputEnvelope',
    })
    t.list.field('set', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('delete', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('update', {
      type: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutCaseLogInput',
    })
    t.list.field('updateMany', {
      type: 'CaseLogSubmissionUpdateManyWithWhereWithoutCaseLogInput',
    })
    t.list.field('deleteMany', { type: 'CaseLogSubmissionScalarWhereInput' })
  },
})

export const CaseLogCreateNestedOneWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreateNestedOneWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('create', { type: 'CaseLogCreateWithoutCaseLogSubmissionInput' })
    t.field('connectOrCreate', {
      type: 'CaseLogCreateOrConnectWithoutCaseLogSubmissionInput',
    })
    t.field('connect', { type: 'CaseLogWhereUniqueInput' })
  },
})

export const ProductsCreateNestedOneWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCreateNestedOneWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('create', { type: 'ProductsCreateWithoutCaseLogSubmissionInput' })
    t.field('connectOrCreate', {
      type: 'ProductsCreateOrConnectWithoutCaseLogSubmissionInput',
    })
    t.field('connect', { type: 'ProductsWhereUniqueInput' })
  },
})

export const CaseLogUpdateOneWithoutCaseLogSubmissionNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdateOneWithoutCaseLogSubmissionNestedInput',
  definition(t) {
    t.field('create', { type: 'CaseLogCreateWithoutCaseLogSubmissionInput' })
    t.field('connectOrCreate', {
      type: 'CaseLogCreateOrConnectWithoutCaseLogSubmissionInput',
    })
    t.field('upsert', { type: 'CaseLogUpsertWithoutCaseLogSubmissionInput' })
    t.field('disconnect', { type: 'CaseLogWhereInput' })
    t.field('delete', { type: 'CaseLogWhereInput' })
    t.field('connect', { type: 'CaseLogWhereUniqueInput' })
    t.field('update', {
      type: 'CaseLogUpdateToOneWithWhereWithoutCaseLogSubmissionInput',
    })
  },
})

export const ProductsUpdateOneWithoutCaseLogSubmissionNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpdateOneWithoutCaseLogSubmissionNestedInput',
  definition(t) {
    t.field('create', { type: 'ProductsCreateWithoutCaseLogSubmissionInput' })
    t.field('connectOrCreate', {
      type: 'ProductsCreateOrConnectWithoutCaseLogSubmissionInput',
    })
    t.field('upsert', { type: 'ProductsUpsertWithoutCaseLogSubmissionInput' })
    t.field('disconnect', { type: 'ProductsWhereInput' })
    t.field('delete', { type: 'ProductsWhereInput' })
    t.field('connect', { type: 'ProductsWhereUniqueInput' })
    t.field('update', {
      type: 'ProductsUpdateToOneWithWhereWithoutCaseLogSubmissionInput',
    })
  },
})

export const SearchHistoryCreatesearchTypeInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryCreatesearchTypeInput',
  definition(t) {
    t.nonNull.field('set', { type: 'SearchType' })
  },
})

export const SearchHistoryCreatesearchResultsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryCreatesearchResultsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Json' })
  },
})

export const SearchHistoryUpdatesearchTypeInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUpdatesearchTypeInput',
  definition(t) {
    t.list.field('set', { type: 'SearchType' })
    t.list.field('push', { type: 'SearchType' })
  },
})

export const SearchHistoryUpdatesearchResultsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SearchHistoryUpdatesearchResultsInput',
  definition(t) {
    t.list.field('set', { type: 'Json' })
    t.list.field('push', { type: 'Json' })
  },
})

export const CaseLogSubmissionCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutProductInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyProductInputEnvelope',
    })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
  },
})

export const CaseLogSubmissionUncheckedCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutProductInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyProductInputEnvelope',
    })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
  },
})

export const CaseLogSubmissionUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutProductInput',
    })
    t.list.field('upsert', {
      type: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutProductInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyProductInputEnvelope',
    })
    t.list.field('set', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('delete', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('update', {
      type: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutProductInput',
    })
    t.list.field('updateMany', {
      type: 'CaseLogSubmissionUpdateManyWithWhereWithoutProductInput',
    })
    t.list.field('deleteMany', { type: 'CaseLogSubmissionScalarWhereInput' })
  },
})

export const CaseLogSubmissionUncheckedUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
    t.list.field('connectOrCreate', {
      type: 'CaseLogSubmissionCreateOrConnectWithoutProductInput',
    })
    t.list.field('upsert', {
      type: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutProductInput',
    })
    t.field('createMany', {
      type: 'CaseLogSubmissionCreateManyProductInputEnvelope',
    })
    t.list.field('set', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('delete', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('connect', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.list.field('update', {
      type: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutProductInput',
    })
    t.list.field('updateMany', {
      type: 'CaseLogSubmissionUpdateManyWithWhereWithoutProductInput',
    })
    t.list.field('deleteMany', { type: 'CaseLogSubmissionScalarWhereInput' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedUuidFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedUuidFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('not', { type: 'NestedUuidFilter' })
  },
})

export const NestedUuidWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedUuidWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('not', { type: 'NestedUuidWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedEnummobileSalesTargetTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnummobileSalesTargetTypeFilter',
  definition(t) {
    t.field('equals', { type: 'mobileSalesTargetType' })
    t.list.field('in', { type: 'mobileSalesTargetType' })
    t.list.field('notIn', { type: 'mobileSalesTargetType' })
    t.field('not', { type: 'NestedEnummobileSalesTargetTypeFilter' })
  },
})

export const NestedEnummobileSalesTargetTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnummobileSalesTargetTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'mobileSalesTargetType' })
    t.list.field('in', { type: 'mobileSalesTargetType' })
    t.list.field('notIn', { type: 'mobileSalesTargetType' })
    t.field('not', {
      type: 'NestedEnummobileSalesTargetTypeWithAggregatesFilter',
    })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnummobileSalesTargetTypeFilter' })
    t.field('_max', { type: 'NestedEnummobileSalesTargetTypeFilter' })
  },
})

export const NestedUuidNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedUuidNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('not', { type: 'NestedUuidNullableFilter' })
  },
})

export const NestedUuidNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedUuidNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('not', { type: 'NestedUuidNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const CaseLogSubmissionCreateWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateWithoutCaseLogInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('product', {
      type: 'ProductsCreateNestedOneWithoutCaseLogSubmissionInput',
    })
  },
})

export const CaseLogSubmissionUncheckedCreateWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedCreateWithoutCaseLogInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('productId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionCreateOrConnectWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateOrConnectWithoutCaseLogInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
  },
})

export const CaseLogSubmissionCreateManyCaseLogInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateManyCaseLogInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CaseLogSubmissionCreateManyCaseLogInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const CaseLogSubmissionUpsertWithWhereUniqueWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutCaseLogInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CaseLogSubmissionUpdateWithoutCaseLogInput',
    })
    t.nonNull.field('create', {
      type: 'CaseLogSubmissionCreateWithoutCaseLogInput',
    })
  },
})

export const CaseLogSubmissionUpdateWithWhereUniqueWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutCaseLogInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'CaseLogSubmissionUpdateWithoutCaseLogInput',
    })
  },
})

export const CaseLogSubmissionUpdateManyWithWhereWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateManyWithWhereWithoutCaseLogInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CaseLogSubmissionUpdateManyMutationInput',
    })
  },
})

export const CaseLogSubmissionScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CaseLogSubmissionScalarWhereInput' })
    t.list.field('OR', { type: 'CaseLogSubmissionScalarWhereInput' })
    t.list.field('NOT', { type: 'CaseLogSubmissionScalarWhereInput' })
    t.field('id', { type: 'UuidFilter' })
    t.field('quantity', { type: 'StringNullableFilter' })
    t.field('salesRepEmail', { type: 'StringNullableFilter' })
    t.field('caseLogId', { type: 'UuidNullableFilter' })
    t.field('productId', { type: 'UuidNullableFilter' })
    t.field('createdAt', { type: 'DateTimeNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeNullableFilter' })
  },
})

export const CaseLogCreateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('caseName', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('account', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('contact', { type: 'String' })
    t.field('secondaryContact', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('status', { type: 'String' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogUncheckedCreateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUncheckedCreateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('caseName', { type: 'String' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.field('account', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('contact', { type: 'String' })
    t.field('secondaryContact', { type: 'String' })
    t.field('activityOwnerName', { type: 'String' })
    t.field('activityOwnerEmail', { type: 'String' })
    t.field('status', { type: 'String' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogCreateOrConnectWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogCreateOrConnectWithoutCaseLogSubmissionInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CaseLogCreateWithoutCaseLogSubmissionInput',
    })
  },
})

export const ProductsCreateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCreateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('upn', { type: 'String' })
    t.field('gtin', { type: 'String' })
    t.field('upnDescription', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductsUncheckedCreateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUncheckedCreateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('upn', { type: 'String' })
    t.field('gtin', { type: 'String' })
    t.field('upnDescription', { type: 'String' })
    t.field('country', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductsCreateOrConnectWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsCreateOrConnectWithoutCaseLogSubmissionInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductsWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'ProductsCreateWithoutCaseLogSubmissionInput',
    })
  },
})

export const CaseLogUpsertWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpsertWithoutCaseLogSubmissionInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'CaseLogUpdateWithoutCaseLogSubmissionInput',
    })
    t.nonNull.field('create', {
      type: 'CaseLogCreateWithoutCaseLogSubmissionInput',
    })
    t.field('where', { type: 'CaseLogWhereInput' })
  },
})

export const CaseLogUpdateToOneWithWhereWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdateToOneWithWhereWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('where', { type: 'CaseLogWhereInput' })
    t.nonNull.field('data', {
      type: 'CaseLogUpdateWithoutCaseLogSubmissionInput',
    })
  },
})

export const CaseLogUpdateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUpdateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const CaseLogUncheckedUpdateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogUncheckedUpdateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('caseName', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('startDate', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('account', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('contact', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('secondaryContact', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerName', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('activityOwnerEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('status', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('photoPaths', { type: 'String' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const ProductsUpsertWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpsertWithoutCaseLogSubmissionInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ProductsUpdateWithoutCaseLogSubmissionInput',
    })
    t.nonNull.field('create', {
      type: 'ProductsCreateWithoutCaseLogSubmissionInput',
    })
    t.field('where', { type: 'ProductsWhereInput' })
  },
})

export const ProductsUpdateToOneWithWhereWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpdateToOneWithWhereWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('where', { type: 'ProductsWhereInput' })
    t.nonNull.field('data', {
      type: 'ProductsUpdateWithoutCaseLogSubmissionInput',
    })
  },
})

export const ProductsUpdateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUpdateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductsUncheckedUpdateWithoutCaseLogSubmissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductsUncheckedUpdateWithoutCaseLogSubmissionInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('upn', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gtin', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('upnDescription', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('country', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const CaseLogSubmissionCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('caseLog', {
      type: 'CaseLogCreateNestedOneWithoutCaseLogSubmissionInput',
    })
  },
})

export const CaseLogSubmissionUncheckedCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedCreateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('caseLogId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionCreateOrConnectWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateOrConnectWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
  },
})

export const CaseLogSubmissionCreateManyProductInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateManyProductInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CaseLogSubmissionCreateManyProductInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const CaseLogSubmissionUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CaseLogSubmissionUpdateWithoutProductInput',
    })
    t.nonNull.field('create', {
      type: 'CaseLogSubmissionCreateWithoutProductInput',
    })
  },
})

export const CaseLogSubmissionUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'CaseLogSubmissionUpdateWithoutProductInput',
    })
  },
})

export const CaseLogSubmissionUpdateManyWithWhereWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateManyWithWhereWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CaseLogSubmissionScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CaseLogSubmissionUpdateManyMutationInput',
    })
  },
})

export const CaseLogSubmissionCreateManyCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateManyCaseLogInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('productId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionUpdateWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateWithoutCaseLogInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('product', {
      type: 'ProductsUpdateOneWithoutCaseLogSubmissionNestedInput',
    })
  },
})

export const CaseLogSubmissionUncheckedUpdateWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateWithoutCaseLogInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('productId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const CaseLogSubmissionUncheckedUpdateManyWithoutCaseLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateManyWithoutCaseLogInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('productId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const CaseLogSubmissionCreateManyProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionCreateManyProductInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('quantity', { type: 'String' })
    t.field('salesRepEmail', { type: 'String' })
    t.field('caseLogId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUpdateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('createdAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('caseLog', {
      type: 'CaseLogUpdateOneWithoutCaseLogSubmissionNestedInput',
    })
  },
})

export const CaseLogSubmissionUncheckedUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('caseLogId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const CaseLogSubmissionUncheckedUpdateManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CaseLogSubmissionUncheckedUpdateManyWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('salesRepEmail', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('caseLogId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    })
  },
})

export const AggregateContactSearch = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateContactSearch',
  definition(t) {
    t.nullable.field('_count', {
      type: 'ContactSearchCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'ContactSearchAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ContactSearchSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ContactSearchMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ContactSearchMaxAggregateOutputType' })
  },
})

export const AggregateComplaint = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateComplaint',
  definition(t) {
    t.nullable.field('_count', { type: 'ComplaintCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'ComplaintMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ComplaintMaxAggregateOutputType' })
  },
})

export const AggregateUserProfile = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUserProfile',
  definition(t) {
    t.nullable.field('_count', { type: 'UserProfileCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserProfileAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserProfileSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserProfileMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserProfileMaxAggregateOutputType' })
  },
})

export const AggregateSliderAndCommission = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateSliderAndCommission',
  definition(t) {
    t.nullable.field('_count', {
      type: 'SliderAndCommissionCountAggregateOutputType',
    })
    t.nullable.field('_avg', {
      type: 'SliderAndCommissionAvgAggregateOutputType',
    })
    t.nullable.field('_sum', {
      type: 'SliderAndCommissionSumAggregateOutputType',
    })
    t.nullable.field('_min', {
      type: 'SliderAndCommissionMinAggregateOutputType',
    })
    t.nullable.field('_max', {
      type: 'SliderAndCommissionMaxAggregateOutputType',
    })
  },
})

export const AggregateTerritoryCategorization = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTerritoryCategorization',
  definition(t) {
    t.nullable.field('_count', {
      type: 'TerritoryCategorizationCountAggregateOutputType',
    })
    t.nullable.field('_avg', {
      type: 'TerritoryCategorizationAvgAggregateOutputType',
    })
    t.nullable.field('_sum', {
      type: 'TerritoryCategorizationSumAggregateOutputType',
    })
    t.nullable.field('_min', {
      type: 'TerritoryCategorizationMinAggregateOutputType',
    })
    t.nullable.field('_max', {
      type: 'TerritoryCategorizationMaxAggregateOutputType',
    })
  },
})

export const AggregateLeaderboard = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateLeaderboard',
  definition(t) {
    t.nullable.field('_count', { type: 'LeaderboardCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'LeaderboardMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'LeaderboardMaxAggregateOutputType' })
  },
})

export const AggregateSales = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateSales',
  definition(t) {
    t.nullable.field('_count', { type: 'SalesCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'SalesAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'SalesSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'SalesMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'SalesMaxAggregateOutputType' })
  },
})

export const AggregateMobile_Sales = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateMobile_Sales',
  definition(t) {
    t.nullable.field('_count', { type: 'Mobile_SalesCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'Mobile_SalesAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'Mobile_SalesSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'Mobile_SalesMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'Mobile_SalesMaxAggregateOutputType' })
  },
})

export const AggregatePlanCall = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePlanCall',
  definition(t) {
    t.nullable.field('_count', { type: 'PlanCallCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'PlanCallMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PlanCallMaxAggregateOutputType' })
  },
})

export const AggregateCaseLog = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCaseLog',
  definition(t) {
    t.nullable.field('_count', { type: 'CaseLogCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'CaseLogMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CaseLogMaxAggregateOutputType' })
  },
})

export const AggregateCaseLogSubmission = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCaseLogSubmission',
  definition(t) {
    t.nullable.field('_count', {
      type: 'CaseLogSubmissionCountAggregateOutputType',
    })
    t.nullable.field('_min', {
      type: 'CaseLogSubmissionMinAggregateOutputType',
    })
    t.nullable.field('_max', {
      type: 'CaseLogSubmissionMaxAggregateOutputType',
    })
  },
})

export const AggregateSearchHistory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateSearchHistory',
  definition(t) {
    t.nullable.field('_count', {
      type: 'SearchHistoryCountAggregateOutputType',
    })
    t.nullable.field('_min', { type: 'SearchHistoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'SearchHistoryMaxAggregateOutputType' })
  },
})

export const AggregateProducts = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProducts',
  definition(t) {
    t.nullable.field('_count', { type: 'ProductsCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProductsMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProductsMaxAggregateOutputType' })
  },
})

export const ContactSearchCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ContactSearchCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('hospital', { type: 'Int' })
    t.field('topicsOfInterest', { type: 'Int' })
    t.field('contactId', { type: 'Int' })
    t.field('doctorName', { type: 'Int' })
    t.field('doctorEmail', { type: 'Int' })
    t.field('doctorAlternativeEmail', { type: 'Int' })
    t.field('doctorDivision', { type: 'Int' })
    t.field('doctorProfilePhoto', { type: 'Int' })
    t.field('doctorSpecialty', { type: 'Int' })
    t.field('doctorSalutation', { type: 'Int' })
    t.field('doctorTitle', { type: 'Int' })
    t.field('doctorPhone', { type: 'Int' })
    t.field('doctorCountry', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ContactSearchAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ContactSearchAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const ContactSearchSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ContactSearchSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const ContactSearchMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ContactSearchMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('hospital', { type: 'String' })
    t.nullable.field('topicsOfInterest', { type: 'String' })
    t.nullable.field('contactId', { type: 'String' })
    t.nullable.field('doctorName', { type: 'String' })
    t.nullable.field('doctorEmail', { type: 'String' })
    t.nullable.field('doctorAlternativeEmail', { type: 'String' })
    t.nullable.field('doctorDivision', { type: 'String' })
    t.nullable.field('doctorProfilePhoto', { type: 'String' })
    t.nullable.field('doctorSpecialty', { type: 'String' })
    t.nullable.field('doctorSalutation', { type: 'String' })
    t.nullable.field('doctorTitle', { type: 'String' })
    t.nullable.field('doctorPhone', { type: 'String' })
    t.nullable.field('doctorCountry', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ContactSearchMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ContactSearchMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('hospital', { type: 'String' })
    t.nullable.field('topicsOfInterest', { type: 'String' })
    t.nullable.field('contactId', { type: 'String' })
    t.nullable.field('doctorName', { type: 'String' })
    t.nullable.field('doctorEmail', { type: 'String' })
    t.nullable.field('doctorAlternativeEmail', { type: 'String' })
    t.nullable.field('doctorDivision', { type: 'String' })
    t.nullable.field('doctorProfilePhoto', { type: 'String' })
    t.nullable.field('doctorSpecialty', { type: 'String' })
    t.nullable.field('doctorSalutation', { type: 'String' })
    t.nullable.field('doctorTitle', { type: 'String' })
    t.nullable.field('doctorPhone', { type: 'String' })
    t.nullable.field('doctorCountry', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ComplaintCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ComplaintCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('complaintId', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('complaintName', { type: 'Int' })
    t.field('complaintStatus', { type: 'Int' })
    t.field('eventDate', { type: 'Int' })
    t.field('createdDate', { type: 'Int' })
    t.field('complaintTitle', { type: 'Int' })
    t.field('division', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('awareDate', { type: 'Int' })
    t.field('timeOfEvent', { type: 'Int' })
    t.field('typeOfSituationReporting', { type: 'Int' })
    t.field('accName', { type: 'Int' })
    t.field('procedureType', { type: 'Int' })
    t.field('procedureDate', { type: 'Int' })
    t.field('treatedFor', { type: 'Int' })
    t.field('procedureOutcome', { type: 'Int' })
    t.field('reasonsForUnsuccessfulProcedure', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ComplaintMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ComplaintMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('complaintId', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('complaintName', { type: 'String' })
    t.nullable.field('complaintStatus', { type: 'String' })
    t.nullable.field('eventDate', { type: 'DateTime' })
    t.nullable.field('createdDate', { type: 'DateTime' })
    t.nullable.field('complaintTitle', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('awareDate', { type: 'DateTime' })
    t.nullable.field('timeOfEvent', { type: 'String' })
    t.nullable.field('typeOfSituationReporting', { type: 'String' })
    t.nullable.field('accName', { type: 'String' })
    t.nullable.field('procedureType', { type: 'String' })
    t.nullable.field('procedureDate', { type: 'DateTime' })
    t.nullable.field('treatedFor', { type: 'String' })
    t.nullable.field('procedureOutcome', { type: 'String' })
    t.nullable.field('reasonsForUnsuccessfulProcedure', { type: 'String' })
  },
})

export const ComplaintMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ComplaintMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('complaintId', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('complaintName', { type: 'String' })
    t.nullable.field('complaintStatus', { type: 'String' })
    t.nullable.field('eventDate', { type: 'DateTime' })
    t.nullable.field('createdDate', { type: 'DateTime' })
    t.nullable.field('complaintTitle', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('awareDate', { type: 'DateTime' })
    t.nullable.field('timeOfEvent', { type: 'String' })
    t.nullable.field('typeOfSituationReporting', { type: 'String' })
    t.nullable.field('accName', { type: 'String' })
    t.nullable.field('procedureType', { type: 'String' })
    t.nullable.field('procedureDate', { type: 'DateTime' })
    t.nullable.field('treatedFor', { type: 'String' })
    t.nullable.field('procedureOutcome', { type: 'String' })
    t.nullable.field('reasonsForUnsuccessfulProcedure', { type: 'String' })
  },
})

export const UserProfileCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserProfileCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('fullName', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('division', { type: 'Int' })
    t.field('reportingTo', { type: 'Int' })
    t.field('networkId', { type: 'Int' })
    t.field('personId', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserProfileAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserProfileAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserProfileSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserProfileSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserProfileMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserProfileMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('reportingTo', { type: 'String' })
    t.nullable.field('networkId', { type: 'String' })
    t.nullable.field('personId', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const UserProfileMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserProfileMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('reportingTo', { type: 'String' })
    t.nullable.field('networkId', { type: 'String' })
    t.nullable.field('personId', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const SliderAndCommissionCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SliderAndCommissionCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'Int' })
    t.field('upperBound', { type: 'Int' })
    t.field('variablePayoutPercentage', { type: 'Int' })
    t.field('territoryCategory', { type: 'Int' })
    t.field('commissionPercentage', { type: 'Int' })
    t.field('year', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const SliderAndCommissionAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SliderAndCommissionAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const SliderAndCommissionSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SliderAndCommissionSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const SliderAndCommissionMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SliderAndCommissionMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('lowerBound', { type: 'String' })
    t.nullable.field('upperBound', { type: 'String' })
    t.nullable.field('variablePayoutPercentage', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('commissionPercentage', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
  },
})

export const SliderAndCommissionMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SliderAndCommissionMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('lowerBound', { type: 'String' })
    t.nullable.field('upperBound', { type: 'String' })
    t.nullable.field('variablePayoutPercentage', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('commissionPercentage', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
  },
})

export const TerritoryCategorizationCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TerritoryCategorizationCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('lowerBound', { type: 'Int' })
    t.field('upperBound', { type: 'Int' })
    t.field('territoryCategory', { type: 'Int' })
    t.field('year', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const TerritoryCategorizationAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TerritoryCategorizationAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const TerritoryCategorizationSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TerritoryCategorizationSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const TerritoryCategorizationMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TerritoryCategorizationMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('lowerBound', { type: 'String' })
    t.nullable.field('upperBound', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
  },
})

export const TerritoryCategorizationMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TerritoryCategorizationMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('lowerBound', { type: 'String' })
    t.nullable.field('upperBound', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
  },
})

export const LeaderboardCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'LeaderboardCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('fullName', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('year', { type: 'Int' })
    t.field('quarter', { type: 'Int' })
    t.field('month', { type: 'Int' })
    t.field('targetAchievedYtd', { type: 'Int' })
    t.field('rankYtd', { type: 'Int' })
    t.field('targetAchievedQtd', { type: 'Int' })
    t.field('rankQtd', { type: 'Int' })
    t.field('targetAchievedMtd', { type: 'Int' })
    t.field('rankMtd', { type: 'Int' })
    t.field('lastRefreshedTimestamp', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const LeaderboardMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'LeaderboardMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('month', { type: 'String' })
    t.nullable.field('targetAchievedYtd', { type: 'String' })
    t.nullable.field('rankYtd', { type: 'String' })
    t.nullable.field('targetAchievedQtd', { type: 'String' })
    t.nullable.field('rankQtd', { type: 'String' })
    t.nullable.field('targetAchievedMtd', { type: 'String' })
    t.nullable.field('rankMtd', { type: 'String' })
    t.nullable.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})

export const LeaderboardMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'LeaderboardMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('month', { type: 'String' })
    t.nullable.field('targetAchievedYtd', { type: 'String' })
    t.nullable.field('rankYtd', { type: 'String' })
    t.nullable.field('targetAchievedQtd', { type: 'String' })
    t.nullable.field('rankQtd', { type: 'String' })
    t.nullable.field('targetAchievedMtd', { type: 'String' })
    t.nullable.field('rankMtd', { type: 'String' })
    t.nullable.field('lastRefreshedTimestamp', { type: 'DateTime' })
  },
})

export const SalesCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SalesCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('sipEligibility', { type: 'Int' })
    t.field('currency', { type: 'Int' })
    t.field('year', { type: 'Int' })
    t.field('quarter', { type: 'Int' })
    t.field('month', { type: 'Int' })
    t.field('productType', { type: 'Int' })
    t.field('newHire', { type: 'Int' })
    t.field('guaranttedPayout', { type: 'Int' })
    t.field('mixedBag', { type: 'Int' })
    t.field('variablePayByMonth', { type: 'Int' })
    t.field('variablePayByYear', { type: 'Int' })
    t.field('variablePayByQuarter', { type: 'Int' })
    t.field('variablePayQ5', { type: 'Int' })
    t.field('salesByMonth', { type: 'Int' })
    t.field('salesByYear', { type: 'Int' })
    t.field('salesByQuarter', { type: 'Int' })
    t.field('targetByMonth', { type: 'Int' })
    t.field('targetByYear', { type: 'Int' })
    t.field('targetByQuarter', { type: 'Int' })
    t.field('salesAchievementPercentageByMonth', { type: 'Int' })
    t.field('salesAchievementPercentageByYear', { type: 'Int' })
    t.field('salesAchievementPercentageByQuarter', { type: 'Int' })
    t.field('variablePayoutPercentageByQuarter', { type: 'Int' })
    t.field('variablePayoutPercentageByYear', { type: 'Int' })
    t.field('targetByYearUSD', { type: 'Int' })
    t.field('territoryCategory', { type: 'Int' })
    t.field('commissionPercentageByQuarter', { type: 'Int' })
    t.field('commissionPayoutByQuarter', { type: 'Int' })
    t.field('variablePayoutByQuarter', { type: 'Int' })
    t.field('additionalPayout', { type: 'Int' })
    t.field('kicker', { type: 'Int' })
    t.field('earlyBirdEligibility', { type: 'Int' })
    t.field('earlyBird', { type: 'Int' })
    t.field('variablePayoutPercentageQ5', { type: 'Int' })
    t.field('variablePayoutQ5', { type: 'Int' })
    t.field('commissionPercentageQ5', { type: 'Int' })
    t.field('commissionPayoutQ5', { type: 'Int' })
    t.field('salesByMonth_forNewHire', { type: 'Int' })
    t.field('salesByYear_forNewHire', { type: 'Int' })
    t.field('salesByQuarter_forNewHire', { type: 'Int' })
    t.field('salesAchivementPercentageByQuarter_forNewHire', { type: 'Int' })
    t.field('salesAchievementPercentageByYear_forNewHire', { type: 'Int' })
    t.field('variablePayoutPercentageByQuarter_forNewHire', { type: 'Int' })
    t.field('variablePayoutPercentageQ5_forNewHire', { type: 'Int' })
    t.field('commissionPercentageByQuarter_forNewHire', { type: 'Int' })
    t.field('commissionPercentageQ5_forNewHire', { type: 'Int' })
    t.field('variablePayoutByQuarter_forNewHire', { type: 'Int' })
    t.field('variablePayoutQ5_forNewHire', { type: 'Int' })
    t.field('commissionPayoutByQuarter_forNewHire', { type: 'Int' })
    t.field('commissionPayoutQ5_forNewHire', { type: 'Int' })
    t.field('additionalPayoutCE', { type: 'Int' })
    t.field('additionalPayoutSC', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const SalesAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SalesAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const SalesSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SalesSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const SalesMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SalesMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('sipEligibility', { type: 'String' })
    t.nullable.field('currency', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('month', { type: 'String' })
    t.nullable.field('productType', { type: 'String' })
    t.nullable.field('newHire', { type: 'String' })
    t.nullable.field('guaranttedPayout', { type: 'String' })
    t.nullable.field('mixedBag', { type: 'String' })
    t.nullable.field('variablePayByMonth', { type: 'String' })
    t.nullable.field('variablePayByYear', { type: 'String' })
    t.nullable.field('variablePayByQuarter', { type: 'String' })
    t.nullable.field('variablePayQ5', { type: 'String' })
    t.nullable.field('salesByMonth', { type: 'String' })
    t.nullable.field('salesByYear', { type: 'String' })
    t.nullable.field('salesByQuarter', { type: 'String' })
    t.nullable.field('targetByMonth', { type: 'String' })
    t.nullable.field('targetByYear', { type: 'String' })
    t.nullable.field('targetByQuarter', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByMonth', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByYear', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutPercentageByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutPercentageByYear', { type: 'String' })
    t.nullable.field('targetByYearUSD', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('commissionPercentageByQuarter', { type: 'String' })
    t.nullable.field('commissionPayoutByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutByQuarter', { type: 'String' })
    t.nullable.field('additionalPayout', { type: 'String' })
    t.nullable.field('kicker', { type: 'String' })
    t.nullable.field('earlyBirdEligibility', { type: 'String' })
    t.nullable.field('earlyBird', { type: 'String' })
    t.nullable.field('variablePayoutPercentageQ5', { type: 'String' })
    t.nullable.field('variablePayoutQ5', { type: 'String' })
    t.nullable.field('commissionPercentageQ5', { type: 'String' })
    t.nullable.field('commissionPayoutQ5', { type: 'String' })
    t.nullable.field('salesByMonth_forNewHire', { type: 'String' })
    t.nullable.field('salesByYear_forNewHire', { type: 'String' })
    t.nullable.field('salesByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'String',
    })
    t.nullable.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'String',
    })
    t.nullable.field('commissionPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('commissionPercentageQ5_forNewHire', { type: 'String' })
    t.nullable.field('variablePayoutByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('variablePayoutQ5_forNewHire', { type: 'String' })
    t.nullable.field('commissionPayoutByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('commissionPayoutQ5_forNewHire', { type: 'String' })
    t.nullable.field('additionalPayoutCE', { type: 'String' })
    t.nullable.field('additionalPayoutSC', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const SalesMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SalesMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('sipEligibility', { type: 'String' })
    t.nullable.field('currency', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('month', { type: 'String' })
    t.nullable.field('productType', { type: 'String' })
    t.nullable.field('newHire', { type: 'String' })
    t.nullable.field('guaranttedPayout', { type: 'String' })
    t.nullable.field('mixedBag', { type: 'String' })
    t.nullable.field('variablePayByMonth', { type: 'String' })
    t.nullable.field('variablePayByYear', { type: 'String' })
    t.nullable.field('variablePayByQuarter', { type: 'String' })
    t.nullable.field('variablePayQ5', { type: 'String' })
    t.nullable.field('salesByMonth', { type: 'String' })
    t.nullable.field('salesByYear', { type: 'String' })
    t.nullable.field('salesByQuarter', { type: 'String' })
    t.nullable.field('targetByMonth', { type: 'String' })
    t.nullable.field('targetByYear', { type: 'String' })
    t.nullable.field('targetByQuarter', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByMonth', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByYear', { type: 'String' })
    t.nullable.field('salesAchievementPercentageByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutPercentageByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutPercentageByYear', { type: 'String' })
    t.nullable.field('targetByYearUSD', { type: 'String' })
    t.nullable.field('territoryCategory', { type: 'String' })
    t.nullable.field('commissionPercentageByQuarter', { type: 'String' })
    t.nullable.field('commissionPayoutByQuarter', { type: 'String' })
    t.nullable.field('variablePayoutByQuarter', { type: 'String' })
    t.nullable.field('additionalPayout', { type: 'String' })
    t.nullable.field('kicker', { type: 'String' })
    t.nullable.field('earlyBirdEligibility', { type: 'String' })
    t.nullable.field('earlyBird', { type: 'String' })
    t.nullable.field('variablePayoutPercentageQ5', { type: 'String' })
    t.nullable.field('variablePayoutQ5', { type: 'String' })
    t.nullable.field('commissionPercentageQ5', { type: 'String' })
    t.nullable.field('commissionPayoutQ5', { type: 'String' })
    t.nullable.field('salesByMonth_forNewHire', { type: 'String' })
    t.nullable.field('salesByYear_forNewHire', { type: 'String' })
    t.nullable.field('salesByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('salesAchivementPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('salesAchievementPercentageByYear_forNewHire', {
      type: 'String',
    })
    t.nullable.field('variablePayoutPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('variablePayoutPercentageQ5_forNewHire', {
      type: 'String',
    })
    t.nullable.field('commissionPercentageByQuarter_forNewHire', {
      type: 'String',
    })
    t.nullable.field('commissionPercentageQ5_forNewHire', { type: 'String' })
    t.nullable.field('variablePayoutByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('variablePayoutQ5_forNewHire', { type: 'String' })
    t.nullable.field('commissionPayoutByQuarter_forNewHire', { type: 'String' })
    t.nullable.field('commissionPayoutQ5_forNewHire', { type: 'String' })
    t.nullable.field('additionalPayoutCE', { type: 'String' })
    t.nullable.field('additionalPayoutSC', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const Mobile_SalesCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'Mobile_SalesCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('targetByQuarter', { type: 'Int' })
    t.field('targetByYear', { type: 'Int' })
    t.field('quarter', { type: 'Int' })
    t.field('year', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const Mobile_SalesAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'Mobile_SalesAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const Mobile_SalesSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'Mobile_SalesSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const Mobile_SalesMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'Mobile_SalesMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('targetByQuarter', { type: 'String' })
    t.nullable.field('targetByYear', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('type', { type: 'mobileSalesTargetType' })
  },
})

export const Mobile_SalesMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'Mobile_SalesMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('targetByQuarter', { type: 'String' })
    t.nullable.field('targetByYear', { type: 'String' })
    t.nullable.field('quarter', { type: 'String' })
    t.nullable.field('year', { type: 'String' })
    t.nullable.field('type', { type: 'mobileSalesTargetType' })
  },
})

export const PlanCallCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PlanCallCountAggregateOutputType',
  definition(t) {
    t.field('uniqueIdInApp', { type: 'Int' })
    t.field('salesForceId', { type: 'Int' })
    t.field('subject', { type: 'Int' })
    t.field('startDate', { type: 'Int' })
    t.field('endDate', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('location', { type: 'Int' })
    t.field('account', { type: 'Int' })
    t.field('contactId', { type: 'Int' })
    t.field('contactName', { type: 'Int' })
    t.field('division', { type: 'Int' })
    t.field('activityType', { type: 'Int' })
    t.field('activitySubtype', { type: 'Int' })
    t.field('activityOwnerName', { type: 'Int' })
    t.field('activityOwnerEmail', { type: 'Int' })
    t.field('ownerCountry', { type: 'Int' })
    t.field('status', { type: 'Int' })
    t.field('createdInApp', { type: 'Int' })
    t.field('lastModifiedInApp', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const PlanCallMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PlanCallMinAggregateOutputType',
  definition(t) {
    t.nullable.field('uniqueIdInApp', { type: 'String' })
    t.nullable.field('salesForceId', { type: 'String' })
    t.nullable.field('subject', { type: 'String' })
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('account', { type: 'String' })
    t.nullable.field('contactId', { type: 'String' })
    t.nullable.field('contactName', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('activityType', { type: 'String' })
    t.nullable.field('activitySubtype', { type: 'String' })
    t.nullable.field('activityOwnerName', { type: 'String' })
    t.nullable.field('activityOwnerEmail', { type: 'String' })
    t.nullable.field('ownerCountry', { type: 'String' })
    t.nullable.field('status', { type: 'String' })
    t.nullable.field('createdInApp', { type: 'DateTime' })
    t.nullable.field('lastModifiedInApp', { type: 'DateTime' })
  },
})

export const PlanCallMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PlanCallMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('uniqueIdInApp', { type: 'String' })
    t.nullable.field('salesForceId', { type: 'String' })
    t.nullable.field('subject', { type: 'String' })
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('account', { type: 'String' })
    t.nullable.field('contactId', { type: 'String' })
    t.nullable.field('contactName', { type: 'String' })
    t.nullable.field('division', { type: 'String' })
    t.nullable.field('activityType', { type: 'String' })
    t.nullable.field('activitySubtype', { type: 'String' })
    t.nullable.field('activityOwnerName', { type: 'String' })
    t.nullable.field('activityOwnerEmail', { type: 'String' })
    t.nullable.field('ownerCountry', { type: 'String' })
    t.nullable.field('status', { type: 'String' })
    t.nullable.field('createdInApp', { type: 'DateTime' })
    t.nullable.field('lastModifiedInApp', { type: 'DateTime' })
  },
})

export const CaseLogCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogCountOutputType',
  definition(t) {
    t.field('caseLogSubmission', { type: 'Int' })
  },
})

export const CaseLogCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('caseName', { type: 'Int' })
    t.field('startDate', { type: 'Int' })
    t.field('endDate', { type: 'Int' })
    t.field('account', { type: 'Int' })
    t.field('location', { type: 'Int' })
    t.field('contact', { type: 'Int' })
    t.field('secondaryContact', { type: 'Int' })
    t.field('activityOwnerName', { type: 'Int' })
    t.field('activityOwnerEmail', { type: 'Int' })
    t.field('status', { type: 'Int' })
    t.field('photoPaths', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CaseLogMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('caseName', { type: 'String' })
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.field('account', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('contact', { type: 'String' })
    t.nullable.field('secondaryContact', { type: 'String' })
    t.nullable.field('activityOwnerName', { type: 'String' })
    t.nullable.field('activityOwnerEmail', { type: 'String' })
    t.nullable.field('status', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('caseName', { type: 'String' })
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.field('account', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('contact', { type: 'String' })
    t.nullable.field('secondaryContact', { type: 'String' })
    t.nullable.field('activityOwnerName', { type: 'String' })
    t.nullable.field('activityOwnerEmail', { type: 'String' })
    t.nullable.field('status', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogSubmissionCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('caseLogId', { type: 'Int' })
    t.field('productId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CaseLogSubmissionMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogSubmissionMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('quantity', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('caseLogId', { type: 'String' })
    t.nullable.field('productId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CaseLogSubmissionMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CaseLogSubmissionMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('quantity', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('caseLogId', { type: 'String' })
    t.nullable.field('productId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const SearchHistoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SearchHistoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('salesRepEmail', { type: 'Int' })
    t.field('searchQuery', { type: 'Int' })
    t.field('searchType', { type: 'Int' })
    t.field('searchResults', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const SearchHistoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SearchHistoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('searchQuery', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const SearchHistoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SearchHistoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('salesRepEmail', { type: 'String' })
    t.nullable.field('searchQuery', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductsCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductsCountOutputType',
  definition(t) {
    t.field('caseLogSubmission', { type: 'Int' })
  },
})

export const ProductsCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductsCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('upn', { type: 'Int' })
    t.field('gtin', { type: 'Int' })
    t.field('upnDescription', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProductsMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductsMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('upn', { type: 'String' })
    t.nullable.field('gtin', { type: 'String' })
    t.nullable.field('upnDescription', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductsMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductsMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('upn', { type: 'String' })
    t.nullable.field('gtin', { type: 'String' })
    t.nullable.field('upnDescription', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})
