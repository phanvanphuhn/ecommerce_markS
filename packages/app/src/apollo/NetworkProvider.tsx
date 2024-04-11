import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  getApolloContext,
  HttpLink,
} from '@apollo/client';
import React from 'react';
import {cache} from './cache';
import Config from 'react-native-config';
import {onError} from '@apollo/client/link/error';
import {store} from 'middlewares/stores';
import {AuthReducer} from 'middlewares/reducers/auth/loginReducer';
import {apolloDevToolsInit} from 'react-native-apollo-devtools-client';

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
const httpLink = new HttpLink({
  uri: `${Config.API_URL}/graphql`,
});
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const {loginToken, isLogin}: AuthReducer = store.getState().userProfile;
  operation.setContext({
    headers: {
      Authorization: isLogin ? `Bearer ${loginToken}` : '',
    },
  });
  return forward(operation);
});
export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: concat(authMiddleware, errorLink).concat(httpLink),
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
if (__DEV__) {
  apolloDevToolsInit(client);
}

export default NetworkProvider;
