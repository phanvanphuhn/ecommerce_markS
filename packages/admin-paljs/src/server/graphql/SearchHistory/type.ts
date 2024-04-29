import { objectType, list } from 'nexus'

export const SearchHistory = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'SearchHistory',
  definition(t) {
    t.string('id')
    t.nullable.string('salesRepEmail')
    t.nullable.string('searchQuery')
    t.list.field('searchType', { type: 'SearchType' })
    t.list.json('searchResults')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})
