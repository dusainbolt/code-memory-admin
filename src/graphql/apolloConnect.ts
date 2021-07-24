import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import store from '../redux/rootStore';
import { setContext } from '@apollo/client/link/context';
export const APOLLO_SERVER_URL = process.env.REACT_APP_GRAPH_URI;

export const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: `${APOLLO_SERVER_URL}/graphql`,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    const token = store.getState().loginReducer;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
};
