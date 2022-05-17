import {
  ApolloClient,
  InMemoryCache, // cache of query results,
  gql
} from "@apollo/client";

// initialize client using existing graphQL server (spaceX launches?)
const client = new ApolloClient({
  uri: "https://n1kqy.sse.codesandbox.io/", // existing graphQL server
  cache: new InMemoryCache() // instantiate cache
});

// query
client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then((result) => console.log(result));
/* - Result
{
  "data": {
    "launch": {
      "__typename": "Launch",
      "id": "56",
      "mission": {
        "__typename": "Mission",
        "name": "Paz / Starlink Demo"
      }
    }
  },
  "loading": false,
  "networkStatus": 7
} 
*/
