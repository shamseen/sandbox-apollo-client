import {
  ApolloClient,
  InMemoryCache // cache of query results
} from "@apollo/client";

// initialize client
const client = new ApolloClient({
  uri: "https://5y2ij.sse.codesandbox.io/", // existing graphQL server
  cache: new InMemoryCache() // instantiate cache
});
