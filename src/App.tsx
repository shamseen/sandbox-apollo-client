import React from "react";
import { gql, useQuery } from "@apollo/client";

export default function App() {
  const { data } = useQuery(gql`
    query TestQuery {
      launch(id: 56) {
        id
        mission {
          name
        }
      }
    }
  `);

  return (
    <div className="App">
      <h1>Apollo Client tutorial</h1>
      <h2>{JSON.stringify(data, null, 2)}</h2>
    </div>
  );
}

/* - Result
"launch": {
  "__typename": "Launch",
  "id": "56",
  "mission": {
    "__typename": "Mission",
    "name": "Paz / Starlink Demo"
  }
}
*/
