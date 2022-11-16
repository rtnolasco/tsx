import * as React from "react";
import { useState } from "react";
import "./App.css";
import Users from "./component/Users";

// import List from "./component/list";
import IState from "./utils/utils";
// import people from "./Query/people";

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      id: 2,
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allergic to teams mates",
    },
  ]);
  return (
    <div className="App">
      <h1>Riki Nolasco</h1>
      {/* <List people={people} /> */}
      <Users />
    </div>
  );
}

export default App;
