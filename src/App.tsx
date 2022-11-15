import * as React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./component/list";
import IState from "./utils/utils";
// import people from "./Query/people";

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allergic to teams mates",
    },
  ]);
  return (
    <div className="App">
      <h1>Riki Nolasco</h1>
      <List people={people} />
    </div>
  );
}

export default App;
