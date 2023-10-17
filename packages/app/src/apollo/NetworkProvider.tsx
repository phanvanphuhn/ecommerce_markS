import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  getApolloContext,
  HttpLink,
} from '@apollo/client';
import React from 'react';
import {cache} from './cache';
import Config from 'react-native-config';
import {onError} from '@apollo/client/link/error';
import {navigate} from 'navigation/service/RootNavigation';
import Routes from 'configs/Routes';
import snackbarUtils from 'utils/snackbar-utils';
import {store} from 'middlewares/stores';

interface NetworkProviderProps {
  children: React.ReactNode;
}
export const useNetwork = () => {
  return getApolloContext();
};
const errorLink = onError(({graphQLErrors, networkError, response}) => {
  console.log('-> response111', response);
  if (graphQLErrors) {
    graphQLErrors.forEach(e => {
      console.log(`[GraphQL error]: Message: ${JSON.stringify(e)}`);
    });
    if (
      graphQLErrors.every(
        e => e?.extensions?.code == '401' || e?.message == 'Token wrong',
      )
    ) {
      // navigate(Routes.LoginScreen);
    }
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // snackbarUtils.show(networkError.message, 'danger');
  }
});
const httpLink = new HttpLink({uri: `${Config.API_URL}/graphql`});

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from([errorLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});
const NetworkProvider = ({children}: NetworkProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default NetworkProvider;
