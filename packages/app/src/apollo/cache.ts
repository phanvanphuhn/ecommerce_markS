import {InMemoryCache} from '@apollo/client';
import {offsetLimitPagination} from '@apollo/client/utilities';
import moment from 'moment/moment';
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getWebs: {
          keyArgs: ['page'],
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing, incoming) {
            if (!existing) {
              return incoming;
            }
            return {
              ...incoming,
              result: {
                ...incoming.result,
                docs: [...existing.result.docs, ...incoming.result.docs],
              },
            };
          },
        },
      },
    },
  },
});
