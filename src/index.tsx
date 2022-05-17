import {
  ApolloClient, // cache of query results
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import App from "./App";

// initialize client using existing graphQL server (spaceX launches?)
const client = new ApolloClient({
  uri: "https://n1kqy.sse.codesandbox.io/", // existing graphQL server
  cache: new InMemoryCache() // instantiate cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
